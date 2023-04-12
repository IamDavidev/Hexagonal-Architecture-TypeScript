import { AuthenticatedUser } from '../../app/schemas/user.schema.ts';

export type AuthDetails = Pick<AuthenticatedUser, 'token' | 'refreshToken'>;

// export type Permissions =

export interface Permissions {
  admin: boolean;
  user: boolean;
  twoFactor: boolean;
}

export interface ForControlAuthenticating {
  getAuthDetails: (email: string, password: string) => Promise<AuthDetails>;
  getPermissions: (email: string, password: string) => Promise<Permissions>;
}
