import { inject, injectable } from 'inversify';
import { Types } from '../container/Types';
import { PrivateUser } from '../domain/User/PrivateUser';
import { User } from '../domain/User/User';
import { UserError } from '../domain/User/UserError';
import { UserID } from '../domain/User/UserID';
import { UserName } from '../domain/User/UserName';
import { UserRepository } from '../domain/User/UserRepository';
import { UserStatus } from '../domain/User/UserStatus';
import { DataSourceError } from '../lib/DataSourceError';
import { Result } from '../lib/Type';

@injectable()
export class RegisterUser {
  private readonly _userRepository: UserRepository;

  public constructor(
    @inject(Types.UserRepository) userRepository: UserRepository
  ) {
    this._userRepository = userRepository;
  }

  public async register(name: UserName): Promise<Result<unknown, UserError | DataSourceError>> {
    const id: UserID = UserID.generate();
    const priv: PrivateUser = PrivateUser.NO;
    const status: UserStatus = UserStatus.NONE;
    const user: User = new User(id, name, priv, status);

    return this._userRepository.create(user);
  }
}
