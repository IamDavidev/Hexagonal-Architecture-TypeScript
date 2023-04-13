import { Repository } from '../../app/main.ts';
import { RepositoryUser, User } from '../../app/models/user.model.ts';
import { ForManagingUser } from '../../ports/drivers/for-managing-user.ts';

export class UserManagerProxy implements ForManagingUser {
  constructor(
    private readonly repository: Repository,
  ) {
  }

  async getUser(email: string): Promise<RepositoryUser> {
    return await this.repository.getUser(email);
  }

  async createUser(user: User, password: string): Promise<RepositoryUser> {
    return await this.repository.createUser(user, password);
  }
}
