import { Collection } from '../../lib/Collection';
import { Follower } from './Follower';

export class Followers implements Collection {
  private readonly _collection: Array<Follower>;

  public constructor(collection: Array<Follower>) {
    this._collection = [...collection];
  }

  public get toArray(): Array<Follower> {
    return [...this._collection];
  }
}
