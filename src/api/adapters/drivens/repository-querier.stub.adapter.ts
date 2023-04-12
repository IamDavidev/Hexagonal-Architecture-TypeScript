import { User as UserModelRepository } from '../../../repository/app/models/user.model.ts';
import { User } from '../../app/schemas/user.schema.ts';
import { ForRepositoryQuerying } from '../../ports/drivens/for-repository-querying.ts';

const UserMock: UserModelRepository = {
  id: 'id',
  name: 'name',
  email: 'email',
};

export class ControlQuerierStub implements ForRepositoryQuerying {
  getUser(_email: string): Promise<UserModelRepository> {
    return Promise.resolve(UserMock);
  }

  createUser(_user: User, _password: string): Promise<UserModelRepository> {
    return Promise.resolve(UserMock);
  }
}
