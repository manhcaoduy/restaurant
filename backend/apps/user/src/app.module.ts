import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { DalModule } from '@backend/core/dal/dal.module';
import { Config } from './config/config';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    DalModule.register({
      useFactory: (config: Config) => {
        return config.mongo;
      },
      inject: [Config],
    }),
    CustomerModule,
  ],
})
export class AppModule {}
