import { DataSourceError } from '../../lib/DataSourceError';
import { Result } from '../../lib/Type';
import { User } from './User';
import { UserError } from './UserError';
import { UserID } from './UserID';

export interface UserRepository {
  create(user: User): Promise<Result<unknown, UserError | DataSourceError>>;

  find(id: UserID): Promise<Result<User, UserError | DataSourceError>>;

  update(user: User): Promise<Result<unknown, UserError | DataSourceError>>;
}
