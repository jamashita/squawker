import { Entity } from '../../lib/Entity';
import { User } from '../User/User';
import { UserID } from '../User/UserID';
import { UserName } from '../User/UserName';
import { UserStatus } from '../User/UserStatus';
import { FollowingID } from './FollowingID';

export class Following implements Entity {
  private readonly _id: FollowingID;
  private readonly _user: User;

  public constructor(id: FollowingID, user: User) {
    this._id = id;
    this._user = user;
  }

  public get id(): FollowingID {
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
