import { LoggerStub } from '../adapters/drivens/logger-stub.adapter.ts';
import { UserManagerProxy } from '../adapters/drivers/user-manager-proxy.adapter.ts';
import { Repository } from './main.ts';

export const CompositionRootMock = () => {
  const logger = new LoggerStub('Repository MOCK');

  const repositoryMock = new Repository(
    logger,
  );

  const userManagerProxy = new UserManagerProxy(repositoryMock);

  return {
    userManagerProxy,
  };
};
