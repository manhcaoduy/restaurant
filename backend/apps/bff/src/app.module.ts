import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { GrpcServiceProviderModule } from './grpc-service-provider/grpc-service-provider.module';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ConfigModule,
    GrpcServiceProviderModule,
    CustomerModule,
    ItemModule,
  ],
})
export class AppModule {}
