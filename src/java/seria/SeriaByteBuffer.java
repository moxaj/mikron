package seria;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class SeriaByteBuffer {
  private ByteBuffer byteBuffer;
  private byte bitBuffer;
  private int bitPosition;
  private int bitIndex;
  private boolean littleEndian;

  private SeriaByteBuffer(int capacity) {
    ByteOrder order = ByteOrder.nativeOrder();
    littleEndian = ByteOrder.LITTLE_ENDIAN.equals(order);
    byteBuffer = ByteBuffer.allocateDirect(capacity).order(order);
    reset();
  }

  private SeriaByteBuffer(byte[] bytes) {
    ByteOrder order = ByteOrder.nativeOrder();
    littleEndian = ByteOrder.LITTLE_ENDIAN.equals(order);
    byteBuffer = ByteBuffer.wrap(bytes).order(order);
    reset();
  }

  public static SeriaByteBuffer allocate(int capacity) {
    return new SeriaByteBuffer(capacity);
  }

  public static SeriaByteBuffer wrap(byte[] bytes) {
    return new SeriaByteBuffer(bytes);
  }

  public SeriaByteBuffer reset() {
    bitBuffer = 0;
    bitPosition = 0;
    bitIndex = 0;
    byteBuffer.position(0);
    return this;
  }

  public byte[] compressed() {
    if ((bitIndex % 8) != 0) {
        byteBuffer.put(bitPosition, bitBuffer);
    }

    byte[] raw = new byte[byteBuffer.position()];
    byteBuffer.position(0);
    byteBuffer.get(raw);
    return raw;
  }

  public boolean isLittleEndian() {
    return littleEndian;
  }

  public SeriaByteBuffer setLittleEndian(boolean littleEndian) {
    this.littleEndian = littleEndian;
    byteBuffer.order(littleEndian ? ByteOrder.LITTLE_ENDIAN : ByteOrder.BIG_ENDIAN);
    return this;
  }

  public boolean getBoolean() {
    if (bitIndex % 8 == 0) {
      bitPosition = byteBuffer.position();
      bitBuffer = byteBuffer.get();
      byteBuffer.position(bitPosition + 1);
    }

    return 0 != (bitBuffer & (1 << bitIndex++));
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

    bitBuffer = (byte) (value ? bitBuffer |  (1 << bitIndex++)
                              : bitBuffer & ~(1 << bitIndex++));
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
