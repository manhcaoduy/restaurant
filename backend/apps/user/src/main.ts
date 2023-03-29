import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Config } from './config/config';
import { UserGrpcOptions } from '@backend/shared/grpc/services/grpc-service.option';

// todo: add logger
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.init();

  const config = await app.get(Config);
  const { grpcPort, httpPort } = config.app;

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:${grpcPort}`,
      ...UserGrpcOptions,
    },
  });

  try {
    await app.startAllMicroservices();
    console.log(`User GRPC running on port ${grpcPort}`);
  } catch (err) {
    console.log(
      'error when initialize grpc-service-provider microservice: ',
      err,
    );
  }

  app
    .listen(httpPort)
    .then(() => {
      console.log(`User running on port ${httpPort}`);
    })
    .catch((err) => {
      console.log(`error whe run user service: ${err}`);
    });
}
bootstrap();
