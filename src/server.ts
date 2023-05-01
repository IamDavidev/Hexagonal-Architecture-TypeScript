import { $bootstrap } from './bootstrap.ts';

const abortController = new AbortController();
const port = 8080;

$bootstrap(abortController, port);
