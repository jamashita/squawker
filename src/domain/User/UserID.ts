import { ValueObject } from '../../lib/ValueObject';

export class UserID implements ValueObject {
  private readonly _value: string;

  public static generate(): UserID {
    // TODO generate random ID
    return new UserID('01GAZEDPK2E0A48AHP4TBYDSJA');
  }

  public constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}
