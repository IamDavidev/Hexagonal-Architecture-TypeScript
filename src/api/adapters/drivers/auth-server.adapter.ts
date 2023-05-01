import { Context } from 'npm:hono@3.1.0';
import { Api } from '../../app/main.ts';
import { AuthenticatedUser, User } from '../../app/schemas/user.schema.ts';

export class AuthServer {
  constructor(private readonly api: Api) {}

  async login(ctx: Context): Promise<AuthenticatedUser> {
    const { email, password } = await ctx.req.json();
    return await this.api.login(email, password);
  }
  async register(ctx: Context): Promise<AuthenticatedUser> {
    const bodyJson = await ctx.req.json();

    const user: User = {
      name: bodyJson.name,
      email: bodyJson.email,
      password: bodyJson.password,
    };

    const _password = bodyJson.password;

    return await this.api.register(user, _password);
  }
}
