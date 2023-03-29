import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc, ClientGrpcProxy } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GRPC_CLIENT_OPTION } from '@backend/shared/grpc/client/grpc-client.constant';
import { GrpcClientOption } from '@backend/shared/grpc/client/grpc-client.option';

@Injectable()
export class GrpcClient extends ClientGrpcProxy implements ClientGrpc {
  constructor(@Inject(GRPC_CLIENT_OPTION) grpcClientOptions: GrpcClientOption) {
    super(
      Object.assign({}, grpcClientOptions.options, {
        channelOptions: grpcClientOptions.maxRetries
          ? {
              'grpc.max_receive_message_length': 100000000,
              'grpc-node.max_session_memory': Number.MAX_SAFE_INTEGER,
            }
          : undefined,
      }),
    );
  }

  // extends ClientGrpcProxy, reimplement getService method
  // follow nest's implementation at https://github.com/nestjs/nest/blob/master/packages/microservices/client/client-grpc.ts
  // wrap serviceMethod to parse response data and catch grpc-service-provider error
  public getService<T extends {}>(name: string): T {
    const grpcClient = this.createClientByServiceName(name);

    const clientRef = this.getClient(name);
    if (!clientRef) {
      throw new Error(`Invalid Grpc Service of ${clientRef}: ${name}`);
    }
    const protoMethods = Object.keys(clientRef[name].prototype);
    const grpcService = {} as T;
    protoMethods.forEach((m) => {
      const key = m[0].toLowerCase() + m.slice(1, m.length);
      const serviceMethod = this.createServiceMethod(grpcClient, m);
      grpcService[key] = this.wrap.bind(this, serviceMethod, name, m);
    });
    return grpcService;
  }

  private wrap(
    fn: Function,
    serviceName: string,
    methodName: string,
    ...args: any[]
  ): any {
    const ret: Observable<unknown> = fn.apply(this, args);
    return ret.pipe(
      // handle receive response from grpc-service-provider services
      map((data: any) => {
        return data;
      }),
      // handle receive error from grpc-service-provider services
      catchError((err) => {
        const loggingData = {
          methodName,
          serviceName,
          details: err.details,
          code: err.code,
        };
        console.error(
          `Failed to call grpc to method ${serviceName}.${methodName}`,
          loggingData,
        );

        return throwError(() => err);
      }),
    );
  }
}
