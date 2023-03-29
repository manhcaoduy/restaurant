import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Module } from '@nestjs/common';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
