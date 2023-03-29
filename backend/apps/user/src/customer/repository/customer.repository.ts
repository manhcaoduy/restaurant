import { BaseRepository } from '@backend/core/dal/repositories/base-repository';
import { CustomerEntity } from './customer.entity';
import { Customer } from './customer.schema';

export class CustomerRepository extends BaseRepository<CustomerEntity> {
  constructor() {
    super(Customer, CustomerEntity);
  }
}
