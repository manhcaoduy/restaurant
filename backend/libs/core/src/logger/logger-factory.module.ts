import { DynamicModuleAsyncOptions } from '@backend/core/framework/dynamic-module-option';
import { LoggerFactoryConfig } from '@backend/core/logger/logger-factory.config';
import { DynamicModule } from '@nestjs/common';
import { LOGGER_FACTORY_CONFIG } from '@backend/core/logger/logger-factory.constant';
import { LoggerFactoryService } from '@backend/core/logger/logger-factory.service';

export class LoggerFactoryModule {
  static forRootAsync(
    options: DynamicModuleAsyncOptions<LoggerFactoryConfig>,
  ): DynamicModule {
    return {
      module: LoggerFactoryModule,
      providers: [
        {
          provide: LOGGER_FACTORY_CONFIG,
          useFactory: options.useFactory,
          inject: options.inject,
        },
        LoggerFactoryService,
      ],
      exports: [LoggerFactoryService],
    };
  }
}
