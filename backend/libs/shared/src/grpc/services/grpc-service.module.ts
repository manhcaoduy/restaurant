import { DynamicModuleAsyncOptions } from '@backend/core/framework/dynamic-module-option';
import { GrpcClientOption } from '@backend/shared/grpc/client/grpc-client.option';
import { DynamicModule } from '@nestjs/common';
import { GrpcClientModule } from '@backend/shared/grpc/client/grpc-client.module';
import { GrpcClient } from '@backend/shared/grpc/client/grpc-client';

export interface GrpcServiceProvideOption {
  serviceName: string;
  provideName: string;
}

export class GrpcServiceModule {
  static forRootAsync(
    asyncOptions: DynamicModuleAsyncOptions<GrpcClientOption>,
    grpcServiceProvideOption: GrpcServiceProvideOption[],
  ): DynamicModule {
    return {
      global: true,
      module: GrpcServiceModule,
      imports: [GrpcClientModule.forAsync(asyncOptions)],
      providers: grpcServiceProvideOption.map((option) => {
        const { provideName, serviceName } = option;
        return {
          provide: provideName,
          useFactory: (client: GrpcClient) => {
            return client.getService(serviceName);
          },
          inject: [GrpcClient],
        };
      }),
      exports: grpcServiceProvideOption.map((option) => {
        const { provideName } = option;
        return provideName;
      }),
    };
  }
}
