import { AuthDetails, Permissions } from '../../app/schemas/user.schema.ts';
import { ForControlAuthenticating } from '../../ports/drivens/for-control-authenticating.ts';

const AuthDetailsMock: AuthDetails = {
  refreshToken: 'refreshToken',
  token: 'token',
};

const PermissionsMock: Permissions = {
  admin: true,
  user: true,
  twoFactor: true,
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getPermissions(): Promise<Permissions> {
    return Promise.resolve(PermissionsMock);
  }

  getAuthDetails(): Promise<AuthDetails> {
    return Promise.resolve(AuthDetailsMock);
  }
}
