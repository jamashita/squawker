import { Collection } from '../../lib/Collection';
import { User } from './User';

export class Users implements Collection {
  private readonly _collection: Array<User>;

  public constructor(collection: Array<User>) {
    this._collection = [...collection];
  }

  public toArray(): Array<User> {
    return [...this._collection];
  }
}
