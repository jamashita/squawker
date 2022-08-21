import { ValueObject } from '../../lib/ValueObject';

export class FollowingID implements ValueObject {
  private readonly _value: string;

  public static generate(): FollowingID {
    // TODO generate random ID
    return new FollowingID('01GAZEE0X9NWH6CQWT38FYWA9M');
  }

  public constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}
