import { ApiProperty } from '@nestjs/swagger';
import { ItemDto } from './item.dto';
import { Exclude, Expose, Type } from 'class-transformer';

export class FindItemRequest {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  keyword?: string;

  constructor(init?: FindItemRequest) {
    Object.assign(this, init);
  }
}

@Exclude()
export class FindItemResponse {
  @Expose()
  @ApiProperty({ type: ItemDto })
  @Type(() => ItemDto)
  item: ItemDto;

  constructor(init?: Partial<FindItemResponse>) {
    Object.assign(this, init);
  }
}
