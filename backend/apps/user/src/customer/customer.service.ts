import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './repository/customer.repository';
import { CustomerEntity } from './repository/customer.entity';

@Injectable()
export class CustomerService {
  constructor(private readonly repo: CustomerRepository) {}

  async createCustomer(data: {
    phone: string;
    name: string;
  }): Promise<CustomerEntity> {
    const { phone, name } = data;
    return this.repo.create({ phone, name });
  }

  async updateCustomer(data: {
    id: string;
    phone?: string;
    name?: string;
  }): Promise<CustomerEntity> {
    const { id, phone, name } = data;
    return await this.repo.updateById(id, { phone, name });
  }

  async findCustomers(data: {
    phone?: string;
    name?: string;
  }): Promise<CustomerEntity[]> {
    return await this.repo.find(data);
  }
}
