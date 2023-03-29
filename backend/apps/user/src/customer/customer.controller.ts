import { Controller } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  CUSTOMER_SERVICE_NAME,
  FindCustomersRequest,
  FindCustomersResponse,
  UpdateCustomerRequest,
  UpdateCustomerResponse,
} from '@backend/shared/proto/customer/v1/customer';
@Controller()
export class CustomerController {
  constructor(private readonly svc: CustomerService) {}

  @GrpcMethod(CUSTOMER_SERVICE_NAME)
  async createCustomer(
    request: CreateCustomerRequest,
  ): Promise<CreateCustomerResponse> {
    const customer = await this.svc.createCustomer(request);
    return { customer };
  }

  @GrpcMethod(CUSTOMER_SERVICE_NAME)
  async updateCustomer(
    request: UpdateCustomerRequest,
  ): Promise<UpdateCustomerResponse> {
    const customer = await this.svc.updateCustomer(request);
    return { customer };
  }

  @GrpcMethod(CUSTOMER_SERVICE_NAME)
  async findCustomers(
    request: FindCustomersRequest,
  ): Promise<FindCustomersResponse> {
    const { phone, name } = request;
    const customers = await this.svc.findCustomers(request);
    return { customers };
  }
}
