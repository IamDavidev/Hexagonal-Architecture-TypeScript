export interface User {
  name: string;
  email: string;
  password: string;
}

export interface RepositoryUser extends User {
  id: string;
}

export type ExternalUser = Omit<RepositoryUser, 'password'>;
