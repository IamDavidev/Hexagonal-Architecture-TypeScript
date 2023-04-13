import { ForMonitoring } from '../ports/drivens/for-monitoring.ts';
import { ForManagingUser } from '../ports/drivers/for-managing-user.ts';
import { RepositoryUser, User } from './models/user.model.ts';

export class Repository implements ForManagingUser {
  private readonly DBUsers: RepositoryUser[] = [];

  constructor(
    private readonly logger: ForMonitoring,
  ) {
  }

  getUser(email: string): Promise<RepositoryUser> {
    const existingUser = this.DBUsers.find((user) => user.email === email);

    if (!existingUser) {
      this.logger.error('[ GET USERR] - User not found');
      throw new Error('Login Repository Exception');
    }

    return Promise.resolve(existingUser);
  }

  createUser(user: User, _password: string): Promise<RepositoryUser> {
    const isUserAlreadyRegistered = this.DBUsers.some((u) =>
      u.email === user.email
    );

    if (isUserAlreadyRegistered) {
      this.logger.error('[ CREATE USER] - User already registered');
      throw new Error('Login Repository Exception - User already registered');
    }

    const newUser: RepositoryUser = {
      ...user,
      id: String(this.DBUsers.length + 1),
    };

    this.DBUsers.push(newUser);

    return Promise.resolve(newUser);
  }
}
