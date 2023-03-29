import { BaseRepository } from '@backend/core/dal/repositories/base-repository';
import { ItemEntity } from './item.entity';
import { Item } from './item.schema';

export class ItemRepository extends BaseRepository<ItemEntity> {
  constructor() {
    super(Item, ItemEntity);
  }
}
