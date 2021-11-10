import {
  DeleteResult, FindConditions, ObjectID, RemoveOptions, Repository, SaveOptions,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

/**
 * 服务基类，实现一些共有的基本方法，这样不用每个服务类在写一遍了，直接继承该类即可
 */
@Injectable()
export class BaseService<T> {
  protected readonly repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async saveOne(entity: T, options?: SaveOptions): Promise<T> {
    return this.repository.save(entity, options);
  }

  async saveMany(entities: T[], options?: SaveOptions): Promise<T[]> {
    return this.repository.save(entities, options);
  }

  async findOne(options?: FindConditions<T>): Promise<T | undefined> {
    return this.repository.findOne(options);
  }

  async findMany(options?: FindConditions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async removeOne(entity: T, options?: RemoveOptions): Promise<T> {
    return this.repository.remove(entity, options);
  }

  async removeMany(entity: T[], options: RemoveOptions): Promise<T[]> {
    return this.repository.remove(entity, options);
  }

  async delete(options: any): Promise<DeleteResult> {
    return this.repository.delete(options);
  }

  async update(
    conditions: number | FindConditions<T>,
    newValue: QueryDeepPartialEntity<T>,
  ): Promise<number> {
    const updateResult = 1;
    await this.repository.update(conditions, newValue);
    return updateResult;
  }
}
