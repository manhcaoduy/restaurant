import { Controller } from '@nestjs/common';
import { ItemService } from './item.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateItemRequest,
  CreateItemResponse,
  DeleteItemRequest,
  DeleteItemResponse,
  FindItemRequest,
  FindItemResponse,
  GetItemsRequest,
  GetItemsResponse,
  ITEM_SERVICE_NAME,
  UpdateItemRequest,
  UpdateItemResponse,
} from '@backend/shared/proto/item/v1/item';

@Controller()
export class ItemController {
  constructor(private readonly svc: ItemService) {}

  @GrpcMethod(ITEM_SERVICE_NAME)
  async createItem(request: CreateItemRequest): Promise<CreateItemResponse> {
    const item = await this.svc.createItem(request);
    return { item };
  }

  @GrpcMethod(ITEM_SERVICE_NAME)
  async updateItem(request: UpdateItemRequest): Promise<UpdateItemResponse> {
    const item = await this.svc.updateItem(request);
    return { item };
  }

  @GrpcMethod(ITEM_SERVICE_NAME)
  async findItem(request: FindItemRequest): Promise<FindItemResponse> {
    const item = await this.svc.findItem(request);
    return { item };
  }

  @GrpcMethod(ITEM_SERVICE_NAME)
  async getItems(request: GetItemsRequest): Promise<GetItemsResponse> {
    const items = await this.svc.getItems(request);
    return { items };
  }

  @GrpcMethod(ITEM_SERVICE_NAME)
  async deleteItem(request: DeleteItemRequest): Promise<DeleteItemResponse> {
    const { id } = request;
    const item = await this.svc.deleteItem(id);
    return { item };
  }
}
