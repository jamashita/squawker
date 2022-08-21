import { ValueObject } from '../../lib/ValueObject';

export class UserID implements ValueObject {
  private readonly _value: string;

  public constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}