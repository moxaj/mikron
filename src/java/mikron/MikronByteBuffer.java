package mikron;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;

public class MikronByteBuffer {
  private ByteBuffer byteBuffer;
  private byte bitBuffer;
  private int bitPosition;
  private int bitIndex;

  private MikronByteBuffer(int capacity) {
    byteBuffer = ByteBuffer.allocateDirect(capacity).order(ByteOrder.nativeOrder());
    clear();
  }

  private MikronByteBuffer(byte[] bytes) {
    byteBuffer = ByteBuffer.wrap(bytes).order(ByteOrder.nativeOrder());
    clear();
  }

  public static MikronByteBuffer allocate(int capacity) {
    return new MikronByteBuffer(capacity);
  }

  public static MikronByteBuffer wrap(byte[] bytes) {
    return new MikronByteBuffer(bytes);
  }

  public MikronByteBuffer clear() {
    bitBuffer = 0;
    bitPosition = -1;
    bitIndex = 0;
    byteBuffer.position(0);
    return this;
  }

  public byte[] compact() {
    if (bitPosition != -1) {
      byteBuffer.put(bitPosition, bitBuffer);
    }

    byte[] raw = new byte[byteBuffer.position()];
    byteBuffer.position(0);
    byteBuffer.get(raw);
    return raw;
  }

  public boolean isLittleEndian() {
    return ByteOrder.LITTLE_ENDIAN == byteBuffer.order();
  }

  public MikronByteBuffer setLittleEndian(boolean littleEndian) {
    byteBuffer.order(littleEndian ? ByteOrder.LITTLE_ENDIAN : ByteOrder.BIG_ENDIAN);
    return this;
  }

  // Get operations

  public byte getByte() {
    return byteBuffer.get();
  }

  public short getShort() {
    return byteBuffer.getShort();
  }

  public int getInt() {
    return byteBuffer.getInt();
  }

  public long getLong() {
    return byteBuffer.getLong();
  }

  public float getFloat() {
    return byteBuffer.getFloat();
  }

  public double getDouble() {
    return byteBuffer.getDouble();
  }

  public long getVarint() throws Exception {
    boolean negative = getBoolean();
    long value = 0;
    for (int shift = 0; shift < 64; shift += 7) {
      byte b = getByte();
      value |= (long) (b & 127) << shift;
      if ((b & 128) == 0) {
        return negative ? (-value - 1) : value;
      }
    }

    throw new Exception("Malformed varint!");
  }

  public boolean getBoolean() {
    if (bitIndex % 8 == 0) {
      bitBuffer = byteBuffer.get();
    }

    return 0 != (bitBuffer & (1 << (bitIndex++ % 8)));
  }

  public char getChar() {
    return byteBuffer.getChar();
  }

  public String getString() throws Exception {
    return new String(getRaw(), StandardCharsets.UTF_8);
  }

  public byte[] getRaw() throws Exception {
    byte[] value = new byte[(int) getVarint()];
    byteBuffer.get(value);
    return value;
  }

  // Put operations

  public MikronByteBuffer putByte(byte value) {
    byteBuffer.put(value);
    return this;
  }

  public MikronByteBuffer putShort(short value) {
    byteBuffer.putShort(value);
    return this;
  }

  public MikronByteBuffer putInt(int value) {
    byteBuffer.putInt(value);
    return this;
  }

  public MikronByteBuffer putLong(long value) {
    byteBuffer.putLong(value);
    return this;
  }

  public MikronByteBuffer putFloat(float value) {
    byteBuffer.putFloat(value);
    return this;
  }

  public MikronByteBuffer putDouble(double value) {
    byteBuffer.putDouble(value);
    return this;
  }

  public MikronByteBuffer putVarint(long value) {
    boolean negative = value < 0;
    value = negative ? -(value + 1) : value;
    putBoolean(negative);
    while (true) {
      if ((value & -128) == 0) {
        putByte((byte) value);
        break;
      }

      putByte((byte) (((int) value & 127) | 128));
      value >>>= 7;
    }

    return this;
  }

  public MikronByteBuffer putBoolean(boolean value) {
    if (bitIndex % 8 == 0) {
      if (bitIndex > 0) {
        byteBuffer.put(bitPosition, bitBuffer);
      }

      bitPosition = byteBuffer.position();
      bitBuffer = 0;
      byteBuffer.position(bitPosition + 1);
    }

    bitBuffer = (byte) (value ? bitBuffer |  (1 << (bitIndex++ % 8))
                              : bitBuffer & ~(1 << (bitIndex++ % 8)));
    return this;
  }

  public MikronByteBuffer putChar(char value) {
    byteBuffer.putChar(value);
    return this;
  }

  public MikronByteBuffer putString(String value) {
    return putRaw(value.getBytes(StandardCharsets.UTF_8));
  }

  public MikronByteBuffer putRaw(byte[] value) {
    putVarint(value.length);
    byteBuffer.put(value);
    return this;
  }
}
