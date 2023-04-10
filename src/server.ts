import { $bootstrap } from "./bootstrap.ts";

const abortController = new AbortController();

$bootstrap(abortController);
