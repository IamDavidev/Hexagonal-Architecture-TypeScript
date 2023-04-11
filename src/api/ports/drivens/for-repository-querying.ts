import { User as UserModelRepository } from '../../../repository/app/models/user.model.ts';
import { User } from '../drivers/for-authenticating.ts';

export interface ForRepositoryQuerying {
  getUser: (email: string) => Promise<UserModelRepository>;
  createUser: (user: User, password: string) => Promise<UserModelRepository>;
}
