import { Expose } from 'class-transformer';

export class CustomerEntity {
  @Expose({ name: '_id' })
  id: string;

  phone: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
