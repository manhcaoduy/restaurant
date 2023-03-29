import { Body, Controller, Inject, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
} from './dto/create-customer.dto';
import { CustomerService } from '@backend/shared/grpc/services/grpc-service.constant';
import { CustomerServiceClient } from '@backend/shared/proto/customer/v1/customer';
import { lastValueFrom } from 'rxjs';
import {
  UpdateCustomerRequest,
  UpdateCustomerResponse,
} from './dto/update-customer.dto';
import {
  FindCustomerRequest,
  FindCustomerResponse,
} from './dto/find-customer.dto';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(
    @Inject(CustomerService)
    private readonly customerSvc: CustomerServiceClient,
  ) {}
  @Post()
  @ApiResponse({
    status: 200,
    type: CreateCustomerResponse,
  })
  async createCustomer(
    @Body() param: CreateCustomerRequest,
  ): Promise<CreateCustomerResponse> {
    const { name, phone } = param;
    const { customer } = await lastValueFrom(
      this.customerSvc.createCustomer({ name, phone }),
    );
    return new CreateCustomerResponse({ customer });
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    type: UpdateCustomerResponse,
  })
  async updateCustomer(
    @Param('id') id: string,
    @Body() param: UpdateCustomerRequest,
  ): Promise<UpdateCustomerResponse> {
    const { name, phone } = param;
    const { customer } = await lastValueFrom(
      this.customerSvc.updateCustomer({ id, name, phone }),
    );
    return new UpdateCustomerResponse({ customer });
  }

  @Post('/find')
  @ApiResponse({
    status: 200,
    type: FindCustomerResponse,
  })
  async findCustomer(
    @Body() param: FindCustomerRequest,
  ): Promise<FindCustomerResponse> {
    const { name, phone } = param;
    const { customers } = await lastValueFrom(
      this.customerSvc.findCustomers({ name, phone }),
    );
    return new FindCustomerResponse({ customers });
  }
}
