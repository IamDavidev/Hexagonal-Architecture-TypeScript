import { assertEquals } from 'https://deno.land/std@0.183.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.183.0/testing/bdd.ts';

import { ControlAuthenticatorStub } from '../../src/api/adapters/drivens/contol-authenticator-stub.adapter.ts';
import { ControlQuerierStub } from '../../src/api/adapters/drivens/repository-querier.stub.adapter.ts';
import { Api } from '../../src/api/app/main.ts';
import { AuthenticatedUser } from '../../src/api/ports/drivers/for-authenticating.ts';

describe('api Integration', () => {
  const controlAuthenticator = new ControlAuthenticatorStub();
  const repositoryQuerier = new ControlQuerierStub();

  const apiMockTest = new Api(
    controlAuthenticator,
    repositoryQuerier,
  );

  it('should be login user correctly', async () => {
    /**
     * [ Given ]
     */

    const mockedUser = {
      email: 'email',
      name: 'name',
    };

    const expectedUser: AuthenticatedUser = {
      email: 'email',
      name: 'name',
      id: 'id',
      refreshToken: 'refreshToken',
      token: 'token',
      permissions: {
        admin: true,
        user: true,
        twoFactor: true,
      },
    };

    /*

    const badExpectedUser: AuthenticatedUser = {
      email: 'bad_email',
      name: 'bad_name',
      id: 'bad_id',
      refreshToken: 'badRefreshToken',
      token: 'bad_token',
      permissions: {
        admin: false,
        user: false,
        twoFactor: false,
      },
    };

    */

    /**
     * [ When ]
     */

    const user = await apiMockTest.login(
      mockedUser.email,
      mockedUser.name,
    );

    /**
     * [ Then ]
     */

    assertEquals(user, expectedUser);
  });
});
