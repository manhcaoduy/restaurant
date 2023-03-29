import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerDto } from './customer.dto';

export class CreateCustomerRequest {
  @ApiProperty({})
  name: string;

  @ApiProperty({})
  phone: string;

  constructor(init: Partial<CreateCustomerRequest>) {
    Object.assign(this, init);
  }
}

@Exclude()
export class CreateCustomerResponse {
  @Expose()
  @ApiProperty({})
  customer: CustomerDto;

  constructor(init: Partial<CreateCustomerResponse>) {
    Object.assign(this, init);
  }
}
