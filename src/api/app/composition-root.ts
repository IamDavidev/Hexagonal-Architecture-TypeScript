import { ControlAuthenticatorStub } from '../adapters/drivens/contol-authenticator-stub.adapter.ts';
import { ControlQuerierStub } from '../adapters/drivens/repository-querier.stub.adapter.ts';
import { AuthServer } from '../adapters/drivers/auth-server.adapter.ts';
import { AuthenticatorProxyAdapter } from '../adapters/drivers/authicator-proxy.adapter.ts';
import { Api } from './main.ts';

export const CompositionRootMock = () => {
  const controlAuthenticator = new ControlAuthenticatorStub();
  const repositoryQuerier = new ControlQuerierStub();

  const apiMock = new Api(controlAuthenticator, repositoryQuerier);

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(apiMock);

  return {
    authenticatorProxyAdapter,
  };
};

interface compositionAuthServerResponse {
  authServer: AuthServer;
}

export function compositionAuthServer(): compositionAuthServerResponse {
  const controlAuthenticator = new ControlAuthenticatorStub();
  const repositoryQuerier = new ControlQuerierStub();

  const api = new Api(controlAuthenticator, repositoryQuerier);

  const authServer = new AuthServer(api);

  return {
    authServer,
  };
}
