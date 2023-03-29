import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ItemService } from '@backend/shared/grpc/services/grpc-service.constant';
import { ItemServiceClient } from '@backend/shared/proto/item/v1/item';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemRequest, CreateItemResponse } from './dto/create-item.dto';
import { lastValueFrom } from 'rxjs';
import { UpdateItemRequest, UpdateItemResponse } from './dto/update-item.dto';
import { FindItemRequest, FindItemResponse } from './dto/find-item.dto';
import { DeleteItemResponse } from './dto/delete-item.dto';
import { GetItemsRequest, GetItemsResponse } from './dto/get-items.dto';

@Controller('item')
@ApiTags('item')
export class ItemController {
  constructor(
    @Inject(ItemService) private readonly itemSvc: ItemServiceClient,
  ) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: CreateItemResponse,
  })
  async createItem(
    @Body() request: CreateItemRequest,
  ): Promise<CreateItemResponse> {
    const { name, price, onMenu } = request;
    const { item } = await lastValueFrom(
      this.itemSvc.createItem({ name, price, onMenu }),
    );
    return new CreateItemResponse({ item });
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    type: UpdateItemResponse,
  })
  async updateItem(
    @Param('id') id: string,
    @Body() request: UpdateItemRequest,
  ): Promise<UpdateItemResponse> {
    const { name, price, onMenu } = request;
    const { item } = await lastValueFrom(
      this.itemSvc.updateItem({ id, name, price, onMenu }),
    );
    return new UpdateItemResponse({ item });
  }

  @Post('/find')
  @ApiResponse({
    status: 200,
    type: FindItemResponse,
  })
  async findItem(@Body() request: FindItemRequest): Promise<FindItemResponse> {
    const { id, keyword } = request;
    const { item } = await lastValueFrom(
      this.itemSvc.findItem({ id, keyword }),
    );
    return new FindItemResponse({ item });
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: GetItemsResponse,
  })
  async getItems(@Query() query: GetItemsRequest): Promise<GetItemsResponse> {
    const { page, limit } = query;
    const { items } = await lastValueFrom(
      this.itemSvc.getItems({ page, limit }),
    );
    return new GetItemsResponse({ items });
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    type: DeleteItemResponse,
  })
  async deleteItem(@Param('id') id: string): Promise<DeleteItemResponse> {
    const { item } = await lastValueFrom(this.itemSvc.deleteItem({ id }));
    return new DeleteItemResponse({ item });
  }
}
