import { DynamicModuleAsyncOptions } from '@backend/core/framework/dynamic-module-option';
import { GrpcClientOption } from '@backend/shared/grpc/client/grpc-client.option';
import { DynamicModule } from '@nestjs/common';
import { GRPC_CLIENT_OPTION } from '@backend/shared/grpc/client/grpc-client.constant';
import { GrpcClient } from '@backend/shared/grpc/client/grpc-client';

export class GrpcClientModule {
  static forAsync(
    asyncOptions: DynamicModuleAsyncOptions<GrpcClientOption>,
  ): DynamicModule {
    return {
      module: GrpcClientModule,
      providers: [
        {
          provide: GRPC_CLIENT_OPTION,
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject,
        },
        GrpcClient,
      ],
      exports: [GrpcClient],
    };
  }
}
