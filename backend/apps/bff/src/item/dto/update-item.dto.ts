import { ApiProperty } from '@nestjs/swagger';
import { ItemDto } from './item.dto';
import { Exclude, Expose, Type } from 'class-transformer';

export class UpdateItemRequest {
  @ApiProperty()
  name?: string;

  @ApiProperty({})
  price?: number;

  @ApiProperty({})
  onMenu?: boolean;

  constructor(init?: UpdateItemRequest) {
    Object.assign(this, init);
  }
}

@Exclude()
export class UpdateItemResponse {
  @Expose()
  @ApiProperty()
  @Type(() => ItemDto)
  item: ItemDto;

  constructor(init?: Partial<UpdateItemResponse>) {
    Object.assign(this, init);
  }
}
