import { Api } from '../../app/main.ts';
import { AuthenticatedUser, User } from '../../app/schemas/user.schema.ts';
import { ForAuthenticating } from '../../ports/drivers/for-authenticating.ts';

export class AuthenticatorProxyAdapter implements ForAuthenticating {
  constructor(
    private readonly api: Api,
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return await this.api.login(email, password);
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    return await this.api.register(user, password);
  }
}
