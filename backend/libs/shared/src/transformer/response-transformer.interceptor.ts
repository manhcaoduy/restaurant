import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum ResponseStatuses {
  Failed,
  Succeed,
}

export interface Response<T> {
  status: ResponseStatuses;
  data: T;
}

@Injectable()
export class ResponseTransformerInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        status: ResponseStatuses.Succeed,
      })),
    );
  }
}
