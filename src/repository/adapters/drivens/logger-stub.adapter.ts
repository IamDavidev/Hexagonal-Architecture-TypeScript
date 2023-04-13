import GLogger from 'https://deno.land/x/glogger@2.1.0/mod.ts';

export class LoggerStub extends GLogger {
  constructor(name: string) {
    super(name);
  }
}
