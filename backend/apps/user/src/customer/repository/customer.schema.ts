import mongoose, { Schema } from 'mongoose';
import { defaultSchemaOptions } from '@backend/core/dal/repositories/schema-default.option';
import { CustomerEntity } from './customer.entity';

const customerSchema = new Schema(
  {
    name: Schema.Types.String,
    phone: Schema.Types.String,
  },
  defaultSchemaOptions,
);

export interface ICustomerDocument extends CustomerEntity, Document {
  _id: string;
}

export const Customer =
  mongoose.models.Customer ||
  mongoose.model<ICustomerDocument>('customers', customerSchema);
