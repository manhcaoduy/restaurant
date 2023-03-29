import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ItemDto } from './item.dto';

export class GetItemsRequest {
  @IsInt()
  @Transform(({ value }) => (value ? parseInt(value, 10) : 1))
  @ApiProperty({
    description: 'Page (pagination)',
    required: false,
    default: 1,
    type: Number,
  })
  page = 1;

  @IsInt()
  @Transform(({ value }) => (value ? parseInt(value, 10) : 10))
  @ApiProperty({
    description: 'Limit (pagination)',
    required: false,
    default: 10,
    maximum: 100,
    type: Number,
  })
  limit = 10;

  constructor(init?: Partial<GetItemsRequest>) {
    Object.assign(this, init);
  }
}

@Exclude()
export class GetItemsResponse {
  @Expose()
  @ApiProperty({ type: [ItemDto] })
  @Type(() => ItemDto)
  items: ItemDto[];

  constructor(init?: Partial<GetItemsResponse>) {
    Object.assign(this, init);
  }
}
