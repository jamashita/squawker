import { Collection } from '../../lib/Collection';
import { Squawk } from './Squawk';

export class Squawks implements Collection {
  private readonly _collection: Array<Squawk>;

  public constructor(collection: Array<Squawk>) {
    this._collection = [...collection];
  }

  public get toArray(): Array<Squawk> {
    return [...this._collection];
  }
}
