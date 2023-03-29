import mongoose, { Schema } from 'mongoose';
import { defaultSchemaOptions } from '@backend/core/dal/repositories/schema-default.option';
import { ItemEntity } from './item.entity';

const itemSchema = new Schema(
  {
    name: Schema.Types.String,
    price: Schema.Types.Number,
    onMenu: Schema.Types.Boolean,
  },
  defaultSchemaOptions,
);

export interface IItemDocument extends ItemEntity, Document {
  _id: string;
}
export const Item =
  mongoose.models.Item || mongoose.model<IItemDocument>('items', itemSchema);
