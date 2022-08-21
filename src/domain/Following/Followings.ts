import { Collection } from '../../lib/Collection';
import { Following } from './Following';

export class Followings implements Collection {
  private readonly _collection: Array<Following>;

  public constructor(collection: Array<Following>) {
    this._collection = [...collection];
  }

  public get toArray(): Array<Following> {
    return [...this._collection];
  }
}
