import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { CustomerDto } from './customer.dto';

export class FindCustomerRequest {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  phone?: string;

  constructor(init?: Partial<FindCustomerRequest>) {
    Object.assign(this, init);
  }
}

@Exclude()
export class FindCustomerResponse {
  @Expose()
  @ApiProperty({
    type: [CustomerDto],
  })
  @Type(() => CustomerDto)
  customers: CustomerDto[];

  constructor(init?: Partial<FindCustomerResponse>) {
    Object.assign(this, init);
  }
}
