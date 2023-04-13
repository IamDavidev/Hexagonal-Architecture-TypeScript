import { ExternalUser } from '../../../repository/app/models/user.model.ts';
import { User } from '../../app/schemas/user.schema.ts';
import { ForRepositoryQuerying } from '../../ports/drivens/for-repository-querying.ts';

const UserMock: ExternalUser = {
  name: 'name',
  email: 'email',
  id: 'id',
};

export class ControlQuerierStub implements ForRepositoryQuerying {
  getUser(_email: string): Promise<ExternalUser> {
    return Promise.resolve(UserMock);
  }

  createUser(_user: User, _password: string): Promise<ExternalUser> {
    return Promise.resolve(UserMock);
  }
}
