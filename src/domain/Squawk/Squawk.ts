import { DateTime } from '../../lib/DateTime/DateTime';
import { Entity } from '../../lib/Entity';
import { User } from '../User/User';
import { Script } from './Script';
import { SquawkID } from './SquawkID';

export class Squawk implements Entity {
  private readonly _id: SquawkID;
  private readonly _script: Script;
  private readonly _by: User;
  private readonly _at: DateTime;

  public constructor(id: SquawkID, script: Script, by: User, at: DateTime) {
    this._id = id;
    this._script = script;
    this._by = by;
    this._at = at;
  }

  public get at(): DateTime {
    return this._at;
  }

  public get by(): User {
    return this._by;
  }

  public get id(): SquawkID {
    return this._id;
  }

  public get script(): Script {
    return this._script;
  }
}
