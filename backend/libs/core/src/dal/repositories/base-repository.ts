import { ClassConstructor, plainToClass } from 'class-transformer';
import { Document, Model } from 'mongoose';
import { OnApplicationBootstrap } from '@nestjs/common';
import { UpdateBody } from '@backend/core/dal/repositories/base-repository.interface';

// todo: add logger here
export class BaseRepository<T extends { id: string }>
  implements OnApplicationBootstrap
{
  public _model: Model<any & Document>;
  private repoName: string;

  constructor(
    protected MongooseModel: Model<any & Document>,
    protected entity: ClassConstructor<T>,
  ) {
    this._model = MongooseModel;
    this.repoName = `${entity.name}Repo`;
  }

  onApplicationBootstrap() {
    console.log('base repository on application boostrap ...');
  }

  async count(query: any): Promise<number> {
    return this.MongooseModel.countDocuments(query);
  }

  async aggregate(query: any[]): Promise<any> {
    return this.MongooseModel.aggregate(query);
  }

  async findById(id: string): Promise<T | null> {
    const data = await this.MongooseModel.findById(id);
    if (!data) return null;

    return this.mapEntity(data.toObject());
  }

  async findOne(query: any) {
    const data = await this.MongooseModel.findOne(query);
    if (!data) return null;

    return this.mapEntity(data.toObject());
  }

  async findOneAndDelete(query: any) {
    return this.MongooseModel.findOneAndDelete(query);
  }

  async find(
    query: any,
    select = '',
    options: { limit?: number; sort?: any; skip?: number } = {},
  ): Promise<T[]> {
    const data = await this.MongooseModel.find(query, select, {
      sort: options.sort || null,
    })
      .skip(options.skip)
      .limit(options.limit)
      .lean()
      .exec();

    return this.mapEntities(data);
  }

  async create(data: Partial<T>): Promise<T> {
    const newEntity = new this.MongooseModel(data);
    const saved = await newEntity.save();

    return this.mapEntity(saved);
  }

  async updateById(id: string, updateBody: UpdateBody<T>): Promise<T | null> {
    const updatedDocument = await this.MongooseModel.findByIdAndUpdate(
      id,
      updateBody,
      { new: true },
    );
    if (updatedDocument) {
      return this.mapEntity(updatedDocument);
    }
    return null;
  }

  async update(
    query: any,
    updateBody: any,
  ): Promise<{
    matched: number;
    modified: number;
  }> {
    const saved = await this.MongooseModel.updateMany(query, updateBody);
    return {
      matched: saved.matchedCount,
      modified: saved.modifiedCount,
    };
  }

  protected mapEntity(data: any): T {
    return plainToClass<T, T>(
      this.entity,
      JSON.parse(JSON.stringify(data)),
    ) as any;
  }

  protected mapEntities(data: any): T[] {
    return plainToClass<T, T[]>(this.entity, JSON.parse(JSON.stringify(data)));
  }
}
