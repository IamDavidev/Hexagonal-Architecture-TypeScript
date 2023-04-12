import { ForControlAuthenticating } from '../ports/drivens/for-control-authenticating.ts';
import { ForRepositoryQuerying } from '../ports/drivens/for-repository-querying.ts';
import {
  AuthenticatedUser,
  ForAuthenticating,
  User,
} from '../ports/drivers/for-authenticating.ts';

export class Api implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repositoryQuerier: ForRepositoryQuerying,
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const userDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password,
    );

    const userPermissions = await this.controlAuthenticator.getPermissions(
      email,
      password,
    );

    const user = await this.repositoryQuerier.getUser(email);

    return {
      ...userDetails,
      ...user,
      permissions: {
        ...userPermissions,
      },
    };
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repositoryQuerier.createUser(user, password);

    const userDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password,
    );

    const userPermissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password,
    );

    return {
      ...userDetails,
      ...newUser,
      permissions: {
        ...userPermissions,
      },
    };
  }
}
