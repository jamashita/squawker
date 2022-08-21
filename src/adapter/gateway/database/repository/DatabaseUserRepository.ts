import { User } from '../../../../domain/User/User';
import { UserError } from '../../../../domain/User/UserError';
import { UserRepository } from '../../../../domain/User/UserRepository';
import { DataSourceError } from '../../../../lib/DataSourceError';
import { Result } from '../../../../lib/Type';

export class DatabaseUserRepository implements UserRepository {
  public create(): Promise<Result<unknown, UserError | DataSourceError>> {
    return Promise.reject(new Error('UNIMPLEMENTED'));
  }

  public find(): Promise<Result<User, UserError | DataSourceError>> {
    return Promise.reject(new Error('UNIMPLEMENTED'));
  }

  public update(): Promise<Result<unknown, UserError | DataSourceError>> {
    return Promise.reject(new Error('UNIMPLEMENTED'));
  }
}
