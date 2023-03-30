import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { GrpcServiceProviderModule } from './grpc-service-provider/grpc-service-provider.module';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';
import { LoggerFactoryModule } from '@backend/core/logger/logger-factory.module';
import { Config } from './config/config';

@Module({
  imports: [
    ConfigModule,
    GrpcServiceProviderModule,
    CustomerModule,
    ItemModule,
    LoggerFactoryModule.forRootAsync({
      useFactory: (config: Config) => {
        return {
          logLevel: config.log.logLevel,
        };
      },
      inject: [Config],
    }),
  ],
})
export class AppModule {}
