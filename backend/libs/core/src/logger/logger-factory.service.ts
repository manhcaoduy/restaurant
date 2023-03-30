import {Inject, Injectable} from "@nestjs/common";
import {LOGGER_FACTORY_CONFIG, logLevels} from "@backend/core/logger/logger-factory.constant";
import {LoggerFactoryConfig} from "@backend/core/logger/logger-factory.config";
import * as winston from "winston";
import {LoggerService} from "@backend/core/logger/logger.service";

@Injectable()
export class LoggerFactoryService {
  private readonly logger: winston.Logger;
  constructor(
    @Inject(LOGGER_FACTORY_CONFIG) private readonly config: LoggerFactoryConfig
  ) {
    this.logger = winston.createLogger({
      levels: logLevels,
      level: config.logLevel,
      format: winston.format.combine(
        winston.format.timestamp({}),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
      ]
    })
  }

  createLogger(caller: string): LoggerService {
    return new LoggerService(this.logger.child({caller}))
  }
}