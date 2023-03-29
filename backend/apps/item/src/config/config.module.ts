import { Global, Module } from '@nestjs/common';
import { Config } from './config';

@Global()
@Module({
  providers: [
    {
      provide: Config,
      useFactory: () => {
        return Config.load();
      },
    },
  ],
  exports: [Config],
})
export class ConfigModule {}
