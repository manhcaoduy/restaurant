/* eslint-disable */
import { Metadata } from '@grpc/grpc-js';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Item } from './dto';

export const protobufPackage = 'item.v1';

export interface CreateItemRequest {
  name: string;
  price: number;
  onMenu: boolean;
}

export interface CreateItemResponse {
  item?: Item;
}

export interface UpdateItemRequest {
  id: string;
  name?: string | undefined;
  price?: number | undefined;
  onMenu?: boolean | undefined;
}

export interface UpdateItemResponse {
  item?: Item;
}

export interface FindItemRequest {
  id?: string | undefined;
  keyword?: string | undefined;
}

export interface FindItemResponse {
  item?: Item;
}

export interface GetItemsRequest {
  page: number;
  limit: number;
}

export interface GetItemsResponse {
  items: Item[];
}

export interface DeleteItemRequest {
  id: string;
}

export interface DeleteItemResponse {
  item?: Item;
}

export const ITEM_V1_PACKAGE_NAME = 'item.v1';

function createBaseCreateItemRequest(): CreateItemRequest {
  return { name: '', price: 0, onMenu: false };
}

export const CreateItemRequest = {
  encode(
    message: CreateItemRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.onMenu === true) {
      writer.uint32(24).bool(message.onMenu);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateItemRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateItemRequest();
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
          if (tag != 16) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.onMenu = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateItemRequest {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      price: isSet(object.price) ? Number(object.price) : 0,
      onMenu: isSet(object.onMenu) ? Boolean(object.onMenu) : false,
    };
  },

  toJSON(message: CreateItemRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.onMenu !== undefined && (obj.onMenu = message.onMenu);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateItemRequest>, I>>(
    base?: I,
  ): CreateItemRequest {
    return CreateItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateItemRequest>, I>>(
    object: I,
  ): CreateItemRequest {
    const message = createBaseCreateItemRequest();
    message.name = object.name ?? '';
    message.price = object.price ?? 0;
    message.onMenu = object.onMenu ?? false;
    return message;
  },
};

function createBaseCreateItemResponse(): CreateItemResponse {
  return {};
}

export const CreateItemResponse = {
  encode(
    message: CreateItemResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateItemResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item = Item.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateItemResponse {
    return {
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: CreateItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateItemResponse>, I>>(
    base?: I,
  ): CreateItemResponse {
    return CreateItemResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateItemResponse>, I>>(
    object: I,
  ): CreateItemResponse {
    const message = createBaseCreateItemResponse();
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseUpdateItemRequest(): UpdateItemRequest {
  return { id: '' };
}

export const UpdateItemRequest = {
  encode(
    message: UpdateItemRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== undefined) {
      writer.uint32(24).int32(message.price);
    }
    if (message.onMenu !== undefined) {
      writer.uint32(32).bool(message.onMenu);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateItemRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateItemRequest();
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
          if (tag != 24) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.onMenu = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateItemRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : undefined,
      price: isSet(object.price) ? Number(object.price) : undefined,
      onMenu: isSet(object.onMenu) ? Boolean(object.onMenu) : undefined,
    };
  },

  toJSON(message: UpdateItemRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.onMenu !== undefined && (obj.onMenu = message.onMenu);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateItemRequest>, I>>(
    base?: I,
  ): UpdateItemRequest {
    return UpdateItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateItemRequest>, I>>(
    object: I,
  ): UpdateItemRequest {
    const message = createBaseUpdateItemRequest();
    message.id = object.id ?? '';
    message.name = object.name ?? undefined;
    message.price = object.price ?? undefined;
    message.onMenu = object.onMenu ?? undefined;
    return message;
  },
};

function createBaseUpdateItemResponse(): UpdateItemResponse {
  return {};
}

export const UpdateItemResponse = {
  encode(
    message: UpdateItemResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateItemResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item = Item.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateItemResponse {
    return {
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: UpdateItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateItemResponse>, I>>(
    base?: I,
  ): UpdateItemResponse {
    return UpdateItemResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateItemResponse>, I>>(
    object: I,
  ): UpdateItemResponse {
    const message = createBaseUpdateItemResponse();
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseFindItemRequest(): FindItemRequest {
  return {};
}

export const FindItemRequest = {
  encode(
    message: FindItemRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.keyword !== undefined) {
      writer.uint32(18).string(message.keyword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindItemRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindItemRequest();
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

          message.keyword = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindItemRequest {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      keyword: isSet(object.keyword) ? String(object.keyword) : undefined,
    };
  },

  toJSON(message: FindItemRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.keyword !== undefined && (obj.keyword = message.keyword);
    return obj;
  },

  create<I extends Exact<DeepPartial<FindItemRequest>, I>>(
    base?: I,
  ): FindItemRequest {
    return FindItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FindItemRequest>, I>>(
    object: I,
  ): FindItemRequest {
    const message = createBaseFindItemRequest();
    message.id = object.id ?? undefined;
    message.keyword = object.keyword ?? undefined;
    return message;
  },
};

function createBaseFindItemResponse(): FindItemResponse {
  return {};
}

export const FindItemResponse = {
  encode(
    message: FindItemResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindItemResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item = Item.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindItemResponse {
    return {
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: FindItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<FindItemResponse>, I>>(
    base?: I,
  ): FindItemResponse {
    return FindItemResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FindItemResponse>, I>>(
    object: I,
  ): FindItemResponse {
    const message = createBaseFindItemResponse();
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseGetItemsRequest(): GetItemsRequest {
  return { page: 0, limit: 0 };
}

export const GetItemsRequest = {
  encode(
    message: GetItemsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(400).int32(message.page);
    }
    if (message.limit !== 0) {
      writer.uint32(408).int32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetItemsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 50:
          if (tag != 400) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.limit = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetItemsRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetItemsRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetItemsRequest>, I>>(
    base?: I,
  ): GetItemsRequest {
    return GetItemsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetItemsRequest>, I>>(
    object: I,
  ): GetItemsRequest {
    const message = createBaseGetItemsRequest();
    message.page = object.page ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseGetItemsResponse(): GetItemsResponse {
  return { items: [] };
}

export const GetItemsResponse = {
  encode(
    message: GetItemsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetItemsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetItemsResponse {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Item.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetItemsResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetItemsResponse>, I>>(
    base?: I,
  ): GetItemsResponse {
    return GetItemsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetItemsResponse>, I>>(
    object: I,
  ): GetItemsResponse {
    const message = createBaseGetItemsResponse();
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteItemRequest(): DeleteItemRequest {
  return { id: '' };
}

export const DeleteItemRequest = {
  encode(
    message: DeleteItemRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteItemRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteItemRequest {
    return { id: isSet(object.id) ? String(object.id) : '' };
  },

  toJSON(message: DeleteItemRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteItemRequest>, I>>(
    base?: I,
  ): DeleteItemRequest {
    return DeleteItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteItemRequest>, I>>(
    object: I,
  ): DeleteItemRequest {
    const message = createBaseDeleteItemRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseDeleteItemResponse(): DeleteItemResponse {
  return {};
}

export const DeleteItemResponse = {
  encode(
    message: DeleteItemResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteItemResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item = Item.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteItemResponse {
    return {
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: DeleteItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteItemResponse>, I>>(
    base?: I,
  ): DeleteItemResponse {
    return DeleteItemResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteItemResponse>, I>>(
    object: I,
  ): DeleteItemResponse {
    const message = createBaseDeleteItemResponse();
    message.item =
      object.item !== undefined && object.item !== null
        ? Item.fromPartial(object.item)
        : undefined;
    return message;
  },
};

export interface ItemServiceClient {
  createItem(
    request: CreateItemRequest,
    metadata?: Metadata,
  ): Observable<CreateItemResponse>;

  updateItem(
    request: UpdateItemRequest,
    metadata?: Metadata,
  ): Observable<UpdateItemResponse>;

  findItem(
    request: FindItemRequest,
    metadata?: Metadata,
  ): Observable<FindItemResponse>;

  getItems(
    request: GetItemsRequest,
    metadata?: Metadata,
  ): Observable<GetItemsResponse>;

  deleteItem(
    request: DeleteItemRequest,
    metadata?: Metadata,
  ): Observable<DeleteItemResponse>;
}

export interface ItemServiceController {
  createItem(
    request: CreateItemRequest,
    metadata?: Metadata,
  ):
    | Promise<CreateItemResponse>
    | Observable<CreateItemResponse>
    | CreateItemResponse;

  updateItem(
    request: UpdateItemRequest,
    metadata?: Metadata,
  ):
    | Promise<UpdateItemResponse>
    | Observable<UpdateItemResponse>
    | UpdateItemResponse;

  findItem(
    request: FindItemRequest,
    metadata?: Metadata,
  ):
    | Promise<FindItemResponse>
    | Observable<FindItemResponse>
    | FindItemResponse;

  getItems(
    request: GetItemsRequest,
    metadata?: Metadata,
  ):
    | Promise<GetItemsResponse>
    | Observable<GetItemsResponse>
    | GetItemsResponse;

  deleteItem(
    request: DeleteItemRequest,
    metadata?: Metadata,
  ):
    | Promise<DeleteItemResponse>
    | Observable<DeleteItemResponse>
    | DeleteItemResponse;
}

export function ItemServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createItem',
      'updateItem',
      'findItem',
      'getItems',
      'deleteItem',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ItemService', method)(
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
      GrpcStreamMethod('ItemService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ITEM_SERVICE_NAME = 'ItemService';

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
