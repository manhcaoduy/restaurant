import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Config } from './config/config';
import { ResponseTransformerInterceptor } from '@backend/shared/transformer/response-transformer.interceptor';
import * as winston from 'winston';
import {LoggerFactoryConfig} from "@backend/core/logger/logger-factory.config";
import {LoggerFactoryService} from "@backend/core/logger/logger-factory.service";

function setupSwagger(app: any) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Restaurant Restful API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ResponseTransformerInterceptor());

  setupSwagger(app);

  const loggerService = app.get(LoggerFactoryService);
  const logger = loggerService.createLogger(AppModule.name);

  const config = app.get(Config);
  const { httpPort } = config.app;
  await app.listen(httpPort);

  logger.info(`Bff running on port ${httpPort}`)

}
bootstrap();
