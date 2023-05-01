import { serve } from 'https://deno.land/std@0.167.0/http/server.ts';
import { Context, Hono } from 'npm:hono@3.1.0';

import { compositionAuthServer } from './api/app/composition-root.ts';
import { logger } from './utils/logger.ts';

export function responseHtmlHome() {
  return /*html*/ `<html>
    <head>
      <title> Hono Ts</title>
    </head>
    <body style="min-height:100vh;background:#191919;color:white">
      <h1>
      Hono with Hexagonal
      </h1>
    </body>
  </html>`;
}

export function $bootstrap(
  abortController: AbortController,
  port?: number | null
) {
  const app = new Hono();

  const { authServer } = compositionAuthServer();

  app.get('/', (ctx) => {
    return ctx.html(responseHtmlHome());
  });

  app.post('/login', async (ctx: Context) => {
    const user = await authServer.login(ctx as Context);
    return ctx.json(user);
  });

  app.post('/register', async (ctx: Context) => {
    const user = await authServer.register(ctx as Context);
    return ctx.json(user);
  });

  try {
    serve(app.fetch, {
      port: port ?? 8080,
      signal: abortController.signal,
    });
    logger.info(`Server running on port ${port}`);
  } catch (_e) {
    abortController.abort();
  }
}
