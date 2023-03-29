import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CustomerDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  phone: string;

  constructor(init: Partial<CustomerDto>) {
    Object.assign(this, init);
  }
}
