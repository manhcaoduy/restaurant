import { GrpcOptions } from '@nestjs/microservices';

export interface GrpcClientOption {
  options: GrpcOptions['options'];
  maxRetries?: number;
}
