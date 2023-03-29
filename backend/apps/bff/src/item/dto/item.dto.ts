import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ItemDto {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  price: number;

  @Expose()
  @ApiProperty()
  onMenu: boolean;

  constructor(init?: Partial<ItemDto>) {
    Object.assign(this, init);
  }
}
