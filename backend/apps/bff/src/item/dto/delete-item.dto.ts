import { ApiProperty } from '@nestjs/swagger';
import { ItemDto } from './item.dto';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class DeleteItemResponse {
  @Expose()
  @ApiProperty({ type: ItemDto })
  @Type(() => ItemDto)
  item: ItemDto;

  constructor(init?: Partial<DeleteItemResponse>) {
    Object.assign(this, init);
  }
}
