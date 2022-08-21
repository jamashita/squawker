import { Entity } from '../../lib/Entity';
import { PrivateUser } from './PrivateUser';
import { UserID } from './UserID';
import { UserName } from './UserName';
import { UserStatus } from './UserStatus';

export class User implements Entity {
  private readonly _id: UserID;
  private readonly _name: UserName;
  private _private: PrivateUser;
  private _status: UserStatus;

  public constructor(id: UserID, name: UserName, priv: PrivateUser, status: UserStatus) {
    this._id = id;
    this._name = name;
    this._private = priv;
    this._status = status;
  }

  public ban(): void {
    this._status = UserStatus.BANNED;
  }

  public isPrivate(): boolean {
    return this._private.isPrivate();
  }

  public makePrivate(): void {
    this._private = PrivateUser.YES;
  }

  public makePublic(): void {
    this._private = PrivateUser.NO;
  }

  public suspend(): void {
    this._status = UserStatus.SUSPENDED;
  }

  public get id(): UserID {
    return this._id;
  }

  public get name(): UserName {
    return this._name;
  }

  public get private(): PrivateUser {
    return this._private;
  }

  public get status(): UserStatus {
    return this._status;
  }
}
