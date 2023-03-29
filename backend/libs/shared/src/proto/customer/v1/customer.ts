/* eslint-disable */
import { Metadata } from '@grpc/grpc-js';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Customer } from './dto';

export const protobufPackage = 'customer.v1';

export interface CreateCustomerRequest {
  name: string;
  phone: string;
}

export interface CreateCustomerResponse {
  customer?: Customer;
}

export interface UpdateCustomerRequest {
  id: string;
  name?: string | undefined;
  phone?: string | undefined;
}

export interface UpdateCustomerResponse {
  customer?: Customer;
}

export interface FindCustomersRequest {
  name?: string | undefined;
  phone?: string | undefined;
}

export interface FindCustomersResponse {
  customers: Customer[];
}

export const CUSTOMER_V1_PACKAGE_NAME = 'customer.v1';

function createBaseCreateCustomerRequest(): CreateCustomerRequest {
  return { name: '', phone: '' };
}

export const CreateCustomerRequest = {
  encode(
    message: CreateCustomerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.phone !== '') {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CreateCustomerRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCustomerRequest {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
    };
  },

  toJSON(message: CreateCustomerRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCustomerRequest>, I>>(
    base?: I,
  ): CreateCustomerRequest {
    return CreateCustomerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCustomerRequest>, I>>(
    object: I,
  ): CreateCustomerRequest {
    const message = createBaseCreateCustomerRequest();
    message.name = object.name ?? '';
    message.phone = object.phone ?? '';
    return message;
  },
};

function createBaseCreateCustomerResponse(): CreateCustomerResponse {
  return {};
}

export const CreateCustomerResponse = {
  encode(
    message: CreateCustomerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CreateCustomerResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCustomerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCustomerResponse {
    return {
      customer: isSet(object.customer)
        ? Customer.fromJSON(object.customer)
        : undefined,
    };
  },

  toJSON(message: CreateCustomerResponse): unknown {
    const obj: any = {};
    message.customer !== undefined &&
      (obj.customer = message.customer
        ? Customer.toJSON(message.customer)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCustomerResponse>, I>>(
    base?: I,
  ): CreateCustomerResponse {
    return CreateCustomerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCustomerResponse>, I>>(
    object: I,
  ): CreateCustomerResponse {
    const message = createBaseCreateCustomerResponse();
    message.customer =
      object.customer !== undefined && object.customer !== null
        ? Customer.fromPartial(object.customer)
        : undefined;
    return message;
  },
};

function createBaseUpdateCustomerRequest(): UpdateCustomerRequest {
  return { id: '' };
}

export const UpdateCustomerRequest = {
  encode(
    message: UpdateCustomerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.phone !== undefined) {
      writer.uint32(26).string(message.phone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdateCustomerRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCustomerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCustomerRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : undefined,
      phone: isSet(object.phone) ? String(object.phone) : undefined,
    };
  },

  toJSON(message: UpdateCustomerRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCustomerRequest>, I>>(
    base?: I,
  ): UpdateCustomerRequest {
    return UpdateCustomerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCustomerRequest>, I>>(
    object: I,
  ): UpdateCustomerRequest {
    const message = createBaseUpdateCustomerRequest();
    message.id = object.id ?? '';
    message.name = object.name ?? undefined;
    message.phone = object.phone ?? undefined;
    return message;
  },
};

function createBaseUpdateCustomerResponse(): UpdateCustomerResponse {
  return {};
}

export const UpdateCustomerResponse = {
  encode(
    message: UpdateCustomerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customer !== undefined) {
      Customer.encode(message.customer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdateCustomerResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCustomerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customer = Customer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCustomerResponse {
    return {
      customer: isSet(object.customer)
        ? Customer.fromJSON(object.customer)
        : undefined,
    };
  },

  toJSON(message: UpdateCustomerResponse): unknown {
    const obj: any = {};
    message.customer !== undefined &&
      (obj.customer = message.customer
        ? Customer.toJSON(message.customer)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCustomerResponse>, I>>(
    base?: I,
  ): UpdateCustomerResponse {
    return UpdateCustomerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCustomerResponse>, I>>(
    object: I,
  ): UpdateCustomerResponse {
    const message = createBaseUpdateCustomerResponse();
    message.customer =
      object.customer !== undefined && object.customer !== null
        ? Customer.fromPartial(object.customer)
        : undefined;
    return message;
  },
};

function createBaseFindCustomersRequest(): FindCustomersRequest {
  return {};
}

export const FindCustomersRequest = {
  encode(
    message: FindCustomersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.phone !== undefined) {
      writer.uint32(18).string(message.phone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FindCustomersRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindCustomersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.phone = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindCustomersRequest {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      phone: isSet(object.phone) ? String(object.phone) : undefined,
    };
  },

  toJSON(message: FindCustomersRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  create<I extends Exact<DeepPartial<FindCustomersRequest>, I>>(
    base?: I,
  ): FindCustomersRequest {
    return FindCustomersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FindCustomersRequest>, I>>(
    object: I,
  ): FindCustomersRequest {
    const message = createBaseFindCustomersRequest();
    message.name = object.name ?? undefined;
    message.phone = object.phone ?? undefined;
    return message;
  },
};

function createBaseFindCustomersResponse(): FindCustomersResponse {
  return { customers: [] };
}

export const FindCustomersResponse = {
  encode(
    message: FindCustomersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.customers) {
      Customer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FindCustomersResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindCustomersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.customers.push(Customer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindCustomersResponse {
    return {
      customers: Array.isArray(object?.customers)
        ? object.customers.map((e: any) => Customer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindCustomersResponse): unknown {
    const obj: any = {};
    if (message.customers) {
      obj.customers = message.customers.map((e) =>
        e ? Customer.toJSON(e) : undefined,
      );
    } else {
      obj.customers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindCustomersResponse>, I>>(
    base?: I,
  ): FindCustomersResponse {
    return FindCustomersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FindCustomersResponse>, I>>(
    object: I,
  ): FindCustomersResponse {
    const message = createBaseFindCustomersResponse();
    message.customers =
      object.customers?.map((e) => Customer.fromPartial(e)) || [];
    return message;
  },
};

export interface CustomerServiceClient {
  createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata,
  ): Observable<CreateCustomerResponse>;

  updateCustomer(
    request: UpdateCustomerRequest,
    metadata?: Metadata,
  ): Observable<UpdateCustomerResponse>;

  findCustomers(
    request: FindCustomersRequest,
    metadata?: Metadata,
  ): Observable<FindCustomersResponse>;
}

export interface CustomerServiceController {
  createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata,
  ):
    | Promise<CreateCustomerResponse>
    | Observable<CreateCustomerResponse>
    | CreateCustomerResponse;

  updateCustomer(
    request: UpdateCustomerRequest,
    metadata?: Metadata,
  ):
    | Promise<UpdateCustomerResponse>
    | Observable<UpdateCustomerResponse>
    | UpdateCustomerResponse;

  findCustomers(
    request: FindCustomersRequest,
    metadata?: Metadata,
  ):
    | Promise<FindCustomersResponse>
    | Observable<FindCustomersResponse>
    | FindCustomersResponse;
}

export function CustomerServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createCustomer',
      'updateCustomer',
      'findCustomers',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('CustomerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('CustomerService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const CUSTOMER_SERVICE_NAME = 'CustomerService';

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
