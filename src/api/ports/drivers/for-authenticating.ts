export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

// export type User = Omit<AuthenticatedUser, 'id' | 'token' | 'refreshToken'>;
export type User = Pick<AuthenticatedUser, 'name' | 'email'>;

export interface ForAuthenticating {
  login: (email: string, password: string) => Promise<AuthenticatedUser>;
  register: (user: User, password: string) => Promise<AuthenticatedUser>;
}
