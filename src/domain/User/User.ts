import { Entity } from '../../lib/Entity';
import { UserID } from './UserID';
import { UserName } from './UserName';
import { UserStatus } from './UserStatus';

export class User implements Entity {
  private readonly _id: UserID;
  private readonly _name: UserName;
  private readonly _status: UserStatus;

  public constructor(id: UserID, name: UserName, status: UserStatus) {
    this._id = id;
    this._name = name;
    this._status = status;
  }

  public get id(): UserID {
    return this._id;
  }

  public get name(): UserName {
    return this._name;
  }

  public get status(): UserStatus {
    return this._status;
  }
}
