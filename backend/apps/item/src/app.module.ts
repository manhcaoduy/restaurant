import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DalModule } from '@backend/core/dal/dal.module';
import { Config } from './config/config';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ConfigModule,
    DalModule.register({
      useFactory: (config: Config) => {
        return config.mongo;
      },
      inject: [Config],
    }),
    ItemModule,
  ],
})
export class AppModule {}
