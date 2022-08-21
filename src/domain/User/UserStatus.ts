import { ValueObject } from '../../lib/ValueObject';

type Status = 'SUSPENDED' | 'WITHDRAWN' | 'BANNED' | 'NONE';

export class UserStatus implements ValueObject {
  private readonly _value: Status;

  public static readonly NONE: UserStatus = new UserStatus('NONE');
  public static readonly SUSPENDED: UserStatus = new UserStatus('SUSPENDED');
  public static readonly WITHDRAWN: UserStatus = new UserStatus('WITHDRAWN');
  public static readonly BANNED: UserStatus = new UserStatus('BANNED');

  protected constructor(value: Status) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }
}
