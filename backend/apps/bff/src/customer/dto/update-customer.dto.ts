import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { CustomerDto } from './customer.dto';

export class UpdateCustomerRequest {
  @ApiProperty({})
  name?: string;

  @ApiProperty({})
  phone?: string;

  constructor(init?: Partial<UpdateCustomerRequest>) {
    Object.assign(this, init);
  }
}

@Exclude()
export class UpdateCustomerResponse {
  @Expose()
  @Type(() => CustomerDto)
  @ApiProperty({})
  customer: CustomerDto;

  constructor(init?: Partial<UpdateCustomerResponse>) {
    Object.assign(this, init);
  }
}
