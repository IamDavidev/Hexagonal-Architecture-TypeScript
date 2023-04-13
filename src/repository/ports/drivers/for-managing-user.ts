import { RepositoryUser, User } from '../../app/models/user.model.ts';

export interface ForManagingUser {
  getUser: (email: string) => Promise<RepositoryUser>;
  createUser: (user: User, password: string) => Promise<RepositoryUser>;
}
