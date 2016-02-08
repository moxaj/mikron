package seria;

import java.nio.ByteBuffer;

public class SeriaByteBuffer {
  private ByteBuffer buffer;
  private int bitPosition;
  private int maxByteLength;

	private SeriaByteBuffer(int capacity) {
		buffer = ByteBuffer.allocate(capacity);
		bitPosition = 0;
    maxByteLength = 0;
	}

  private SeriaByteBuffer(byte[] bytes) {
    buffer = ByteBuffer.wrap(bytes);
    bitPosition = 0;
    maxByteLength = 0;
  }

  public static SeriaByteBuffer allocate(int capacity) {
    return new SeriaByteBuffer(capacity);
  }

  public static SeriaByteBuffer wrap(byte[] bytes) {
    return new SeriaByteBuffer(bytes);
  }

  public byte[] toRaw() {
    int totalBitLength = (int) Math.ceil(bitPosition / 8.0f) - maxByteLength;
    int totalByteLength = buffer.position();
    byte[] raw = new byte[totalBitLength + totalByteLength];

    byte[] backingArray = buffer.array();
    System.arraycopy(backingArray, 0, raw, 0, totalByteLength);
    System.arraycopy(backingArray, maxByteLength, raw, totalByteLength, totalBitLength);

    return raw;
  }

	////////////////////////////////////////////////////////////
	//
	// Positioning
	//
	////////////////////////////////////////////////////////////

  public int getBitPosition() {
    return bitPosition;
  }

  public SeriaByteBuffer setBitPosition(int bitPosition) {
    this.bitPosition = bitPosition;
    return this;
  }

  public int getBytePosition() {
    return buffer.position();
  }

  public SeriaByteBuffer setBytePosition(int bytePosition) {
    buffer.position(bytePosition);
    return this;
  }

  public int getMaxByteLength() {
    return maxByteLength;
  }

  public SeriaByteBuffer setMaxByteLength(int maxByteLength) {
    this.maxByteLength = maxByteLength;
    return this;
  }

	////////////////////////////////////////////////////////////
	//
	// Buffer methods
	//
	////////////////////////////////////////////////////////////

	public boolean getBoolean() {
		boolean value = (buffer.get(bitPosition / 8) & (1 << bitPosition % 8)) != 0;
		bitPosition++;
		return value;
	}

	public SeriaByteBuffer putBoolean(boolean value) {
		int position = bitPosition / 8;
		byte b = buffer.get(position);
		buffer.put(position, (byte) (value ? (b | (1 << bitPosition % 8)) : (b & ~(1 << bitPosition % 8))));
		bitPosition++;
    return this;
	}

	public byte getByte() {
		return buffer.get();
	}

	public char getChar() {
		return buffer.getChar();
	}

	public double getDouble() {
		return buffer.getDouble();
	}

	public float getFloat() {
		return buffer.getFloat();
	}

	public int getInt() {
		return buffer.getInt();
	}

	public long getLong() {
		return buffer.getLong();
	}

	public short getShort() {
		return buffer.getShort();
	}

	public SeriaByteBuffer putByte(byte value) {
		buffer.put(value);
    return this;
	}

	public SeriaByteBuffer putChar(char value) {
		buffer.putChar(value);
    return this;
	}

	public SeriaByteBuffer putDouble(double value) {
		buffer.putDouble(value);
    return this;
	}

	public SeriaByteBuffer putFloat(float value) {
		buffer.putFloat(value);
    return this;
	}

	public SeriaByteBuffer putInt(int value) {
		buffer.putInt(value);
    return this;
	}

	public SeriaByteBuffer putLong(long value) {
		buffer.putLong(value);
    return this;
	}

	public SeriaByteBuffer putShort(short value) {
		buffer.putShort(value);
    return this;
	}
}
