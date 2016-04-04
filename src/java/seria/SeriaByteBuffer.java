package seria;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class SeriaByteBuffer {
  private ByteBuffer byteBuffer;
  private byte bitBuffer;
  private int bitPosition;
  private int bitIndex;

  private SeriaByteBuffer(int capacity) {
    ByteOrder order = ByteOrder.nativeOrder();
    byteBuffer = ByteBuffer.allocateDirect(capacity).order(order);
    clear();
  }

  private SeriaByteBuffer(byte[] bytes) {
    ByteOrder order = ByteOrder.nativeOrder();
    byteBuffer = ByteBuffer.wrap(bytes).order(order);
    clear();
  }

  public static SeriaByteBuffer allocate(int capacity) {
    return new SeriaByteBuffer(capacity);
  }

  public static SeriaByteBuffer wrap(byte[] bytes) {
    return new SeriaByteBuffer(bytes);
  }

  public SeriaByteBuffer clear() {
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

  public SeriaByteBuffer setLittleEndian(boolean littleEndian) {
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

  public SeriaByteBuffer putBoolean(boolean value) {
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

  public SeriaByteBuffer putByte(byte value) {
    byteBuffer.put(value);
    return this;
  }

  public SeriaByteBuffer putChar(char value) {
    byteBuffer.putChar(value);
    return this;
  }

  public SeriaByteBuffer putDouble(double value) {
    byteBuffer.putDouble(value);
    return this;
  }

  public SeriaByteBuffer putFloat(float value) {
    byteBuffer.putFloat(value);
    return this;
  }

  public SeriaByteBuffer putInt(int value) {
    byteBuffer.putInt(value);
    return this;
  }

  public SeriaByteBuffer putLong(long value) {
    byteBuffer.putLong(value);
    return this;
  }

  public SeriaByteBuffer putShort(short value) {
    byteBuffer.putShort(value);
    return this;
  }
}
