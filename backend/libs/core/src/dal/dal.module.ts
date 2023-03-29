import { DynamicModule, Module } from '@nestjs/common';
import { DalServiceOptions } from './dal.config';
import { DalService } from './dal.service';
import { DynamicModuleAsyncOptions } from '../framework/dynamic-module-option';
import { DAL_SERVICE_OPTIONS } from './dal.constant';

@Module({})
export class DalModule {
  static register(
    asyncOptions: DynamicModuleAsyncOptions<DalServiceOptions>,
  ): DynamicModule {
    return {
      module: DalModule,
      providers: [
        {
          provide: DAL_SERVICE_OPTIONS,
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject,
        },
        DalService,
      ],
    };
  }
}
