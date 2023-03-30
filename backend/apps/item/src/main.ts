import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Config } from './config/config';
import { ItemGrpcOptions } from '@backend/shared/grpc/services/grpc-service.option';
import {LoggerFactoryService} from "@backend/core/logger/logger-factory.service";
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.init();

  const loggerFactoryService = await app.get(LoggerFactoryService);
  const logger = loggerFactoryService.createLogger(AppModule.name);
  const config = await app.get(Config);
  const { grpcPort, httpPort } = config.app;

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${grpcPort}`,
      ...ItemGrpcOptions,
    },
  });

  try {
    await app.startAllMicroservices();
    logger.info(`Item GRPC running on port ${grpcPort}`);
  } catch (err) {
    logger.critical(`error when initialize grpc-service-provider microservice: ${err}`);
    process.exit(1);
  }

  app
    .listen(httpPort)
    .then(() => {
      logger.info(`Item running on port ${httpPort}`);
    })
    .catch((err) => {
      logger.critical(`error whe run item service: ${err}`);
      process.exit(1);
    });
}
bootstrap();
