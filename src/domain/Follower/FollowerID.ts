import { ValueObject } from '../../lib/ValueObject';

export class FollowerID implements ValueObject {
  private readonly _value: string;

  public static generate(): FollowerID {
    // TODO generate random ID
    return new FollowerID('01GAZEE5SZ6FBN2B1WZ9QRQAR1');
  }

  public constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}
