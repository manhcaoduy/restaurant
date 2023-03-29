import { Injectable } from '@nestjs/common';
import { ItemRepository } from './repositories/item.repository';
import { ItemEntity } from './repositories/item.entity';

@Injectable()
export class ItemService {
  constructor(private readonly repo: ItemRepository) {}

  async createItem(data: {
    name: string;
    price: number;
    onMenu: boolean;
  }): Promise<ItemEntity> {
    const { name, price, onMenu } = data;
    const item = await this.repo.create({ name, price, onMenu });
    return item;
  }

  async updateItem(data: {
    id: string;
    name?: string;
    price?: number;
    onMenu?: boolean;
  }): Promise<ItemEntity> {
    const { id, name, price, onMenu } = data;
    const item = await this.repo.updateById(id, { name, price, onMenu });
    return item;
  }

  async findItem(data: { id?: string; keyword?: string }): Promise<ItemEntity> {
    const query = {};
    if (data.id) {
      query['id'] = data.id;
    }
    if (data.keyword) {
      query['keyword'] = {
        $regex: `^${data.keyword}`,
        $options: 'i',
      };
    }
    const item = await this.repo.findOne(query);
    return item;
  }
  async getItems(data: { page: number; limit: number }): Promise<ItemEntity[]> {
    const { page, limit } = data;
    const items = await this.repo.find({}, '', {
      skip: (page - 1) * limit,
      limit,
    });
    return items;
  }
  async deleteItem(id: string): Promise<ItemEntity> {
    const item = await this.repo.findOneAndDelete({ _id: id });
    return item;
  }
}
