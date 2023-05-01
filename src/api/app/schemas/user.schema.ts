import { z } from 'https://deno.land/x/zod@v3.16.1/mod.ts';

export type AuthDetails = Pick<AuthenticatedUser, 'token' | 'refreshToken'>;

export const PermissionsSchema = z.object({
  admin: z.boolean(),
  user: z.boolean(),
  twoFactor: z.boolean(),
});

/*
    export interface Permissions {
      admin: boolean;
      user: boolean;
      twoFactor: boolean;
    }
*/
export type Permissions = z.infer<typeof PermissionsSchema>;

export const AuthenticatedUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  token: z.string(),
  refreshToken: z.string(),
  permissions: PermissionsSchema,
});

/*
export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  permissions: Permissions;
}
*/
export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;

/*
export type User = Omit<AuthenticatedUser, 'id' | 'token' | 'refreshToken'>;
export type User = Pick<AuthenticatedUser, 'name' | 'email'> & {
  password: string;
};
*/
const UserSchema = AuthenticatedUserSchema.pick({
  email: true,
  name: true,
}).and(z.object({ password: z.string() }));

export type User = z.infer<typeof UserSchema>;

// export const UserSchema =
