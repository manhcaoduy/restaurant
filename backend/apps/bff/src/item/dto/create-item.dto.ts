import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { ItemDto } from './item.dto';

export class CreateItemRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  onMenu: boolean;

  constructor(init?: CreateItemRequest) {
    Object.assign(this, init);
  }
}

@Exclude()
export class CreateItemResponse {
  @Exclude()
  @ApiProperty()
  @Type(() => ItemDto)
  item: ItemDto;

  constructor(init?: Partial<CreateItemResponse>) {
    Object.assign(this, init);
  }
}
