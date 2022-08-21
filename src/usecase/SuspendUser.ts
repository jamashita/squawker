import { inject, injectable } from 'inversify';
import { Types } from '../container/Types';
import { User } from '../domain/User/User';
import { UserError } from '../domain/User/UserError';
import { UserID } from '../domain/User/UserID';
import { UserRepository } from '../domain/User/UserRepository';
import { DataSourceError } from '../lib/DataSourceError';
import { Result } from '../lib/Type';

@injectable()
export class SuspendUser {
  private readonly _userRepository: UserRepository;

  public constructor(
    @inject(Types.UserRepository) userRepository: UserRepository
  ) {
    this._userRepository = userRepository;
  }

  public async suspend(id: UserID): Promise<Result<unknown, UserError | DataSourceError>> {
    const res: Result<User, UserError | DataSourceError> = await this._userRepository.find(id);

    if (!res.succeeded) {
      return res;
    }

    const user: User = res.value;

    user.makeSuspended();

    return this._userRepository.update(user);
  }
}
