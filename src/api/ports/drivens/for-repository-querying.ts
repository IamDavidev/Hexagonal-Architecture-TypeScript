import { ExternalUser } from '../../../repository/app/models/user.model.ts';
import { User } from '../../app/schemas/user.schema.ts';

export interface ForRepositoryQuerying {
  getUser: (email: string) => Promise<ExternalUser>;
  createUser: (user: User, password: string) => Promise<ExternalUser>;
}
