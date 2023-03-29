/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'item.v1';

export interface Item {
  id: string;
  name: string;
  price: number;
  onMenu: boolean;
  createdAt: string;
  updatedAt: string;
}

export const ITEM_V1_PACKAGE_NAME = 'item.v1';

function createBaseItem(): Item {
  return {
    id: '',
    name: '',
    price: 0,
    onMenu: false,
    createdAt: '',
    updatedAt: '',
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(24).int32(message.price);
    }
    if (message.onMenu === true) {
      writer.uint32(32).bool(message.onMenu);
    }
    if (message.createdAt !== '') {
      writer.uint32(402).string(message.createdAt);
    }
    if (message.updatedAt !== '') {
      writer.uint32(410).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
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
        case 50:
          if (tag != 402) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 51:
          if (tag != 410) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      price: isSet(object.price) ? Number(object.price) : 0,
      onMenu: isSet(object.onMenu) ? Boolean(object.onMenu) : false,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : '',
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.onMenu !== undefined && (obj.onMenu = message.onMenu);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<Item>, I>>(base?: I): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.price = object.price ?? 0;
    message.onMenu = object.onMenu ?? false;
    message.createdAt = object.createdAt ?? '';
    message.updatedAt = object.updatedAt ?? '';
    return message;
  },
};

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
