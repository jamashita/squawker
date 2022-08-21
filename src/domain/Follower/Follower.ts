import { Entity } from '../../lib/Entity';
import { User } from '../User/User';
import { UserID } from '../User/UserID';
import { UserName } from '../User/UserName';
import { UserStatus } from '../User/UserStatus';
import { FollowerID } from './FollowerID';

export class Follower implements Entity {
  private readonly _id: FollowerID;
  private readonly _user: User;

  public constructor(id: FollowerID, user: User) {
    this._id = id;
    this._user = user;
  }

  public get id(): FollowerID {
    return this._id;
  }

  public get name(): UserName {
    return this._user.name;
  }

  public get status(): UserStatus {
    return this._user.status;
  }

  public get userID(): UserID {
    return this._user.id;
  }
}
