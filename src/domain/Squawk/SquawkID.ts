import { ValueObject } from '../../lib/ValueObject';

export class SquawkID implements ValueObject {
  private readonly _value: string;

  public static generate(): SquawkID {
    // TODO generate random ID
    return new SquawkID('01GAZEDW51AJMY971T7BZ2N3DD');
  }

  public constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}
