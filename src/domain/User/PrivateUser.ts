import { ValueObject } from '../../lib/ValueObject';

export class PrivateUser implements ValueObject {
  private readonly _value: boolean;

  public static readonly YES: PrivateUser = new PrivateUser(true);
  public static readonly NO: PrivateUser = new PrivateUser(false);

  public static of(value: boolean): PrivateUser {
    if (value) {
      return PrivateUser.YES;
    }

    return PrivateUser.NO;
  }

  protected constructor(value: boolean) {
    this._value = value;
  }

  isPrivate(): boolean {
    return this === PrivateUser.YES;
  }

  public get value(): boolean {
    return this._value;
  }
}
