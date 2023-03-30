import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { DalModule } from '@backend/core/dal/dal.module';
import { Config } from './config/config';
import { ConfigModule } from './config/config.module';
import {LoggerFactoryModule} from "@backend/core/logger/logger-factory.module";

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
    LoggerFactoryModule.forRootAsync({
      useFactory: (config: Config) => {
        return {
          logLevel: config.log.logLevel,
        }
      },
      inject: [Config],
    })
  ],
})
export class AppModule {}
