import { Module } from '@nestjs/common';
import { GrpcServiceModule } from '@backend/shared/grpc/services/grpc-service.module';
import { Config } from '../config/config';
import {
  ItemGrpcOptions,
  UserGrpcOptions,
} from '@backend/shared/grpc/services/grpc-service.option';
import {
  CustomerService,
  ItemService,
} from '@backend/shared/grpc/services/grpc-service.constant';
import { CUSTOMER_SERVICE_NAME } from '@backend/shared/proto/customer/v1/customer';
import { ITEM_SERVICE_NAME } from '@backend/shared/proto/item/v1/item';

@Module({
  imports: [
    GrpcServiceModule.forRootAsync(
      {
        useFactory: (config: Config) => {
          const grpcConfig = config.grpc;
          const { maxRetries } = grpcConfig;
          const grpcOptions = Object.assign({}, UserGrpcOptions, {
            url: grpcConfig.userEndpoint,
          });
          return {
            options: grpcOptions,
            maxRetries,
          };
        },
        inject: [Config],
      },
      [
        {
          provideName: CustomerService,
          serviceName: CUSTOMER_SERVICE_NAME,
        },
      ],
    ),
    GrpcServiceModule.forRootAsync(
      {
        useFactory: (config: Config) => {
          const grpcConfig = config.grpc;
          const { maxRetries } = grpcConfig;
          const grpcOptions = Object.assign({}, ItemGrpcOptions, {
            url: grpcConfig.itemEndpoint,
          });
          return {
            options: grpcOptions,
            maxRetries,
          };
        },
        inject: [Config],
      },
      [
        {
          provideName: ItemService,
          serviceName: ITEM_SERVICE_NAME,
        },
      ],
    ),
  ],
})
export class GrpcServiceProviderModule {}
