package mikron;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

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

  public byte[] compress() {
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

  public boolean getBoolean() {
    if (bitIndex % 8 == 0) {
      bitBuffer = byteBuffer.get();
    }

    return 0 != (bitBuffer & (1 << (bitIndex++ % 8)));
  }

  public byte getByte() {
    return byteBuffer.get();
  }

  public char getChar() {
    return byteBuffer.getChar();
  }

  public double getDouble() {
    return byteBuffer.getDouble();
  }

  public float getFloat() {
    return byteBuffer.getFloat();
  }

  public int getInt() {
    return byteBuffer.getInt();
  }

  public long getLong() {
    return byteBuffer.getLong();
  }

  public short getShort() {
    return byteBuffer.getShort();
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

  public MikronByteBuffer putByte(byte value) {
    byteBuffer.put(value);
    return this;
  }

  public MikronByteBuffer putChar(char value) {
    byteBuffer.putChar(value);
    return this;
  }

  public MikronByteBuffer putDouble(double value) {
    byteBuffer.putDouble(value);
    return this;
  }

  public MikronByteBuffer putFloat(float value) {
    byteBuffer.putFloat(value);
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

  public MikronByteBuffer putShort(short value) {
    byteBuffer.putShort(value);
    return this;
  }
}
