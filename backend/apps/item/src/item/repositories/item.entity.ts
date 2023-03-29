import { Expose } from 'class-transformer';

export class ItemEntity {
  @Expose({ name: '_id' })
  id: string;

  name: string;
  price: number;
  onMenu: boolean;

  createdAt: string;
  updatedAt: string;
}
