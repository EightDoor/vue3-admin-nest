import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysDictItem } from './dict-item.entity';

@Injectable()
export class DictItemService extends TypeOrmCrudService<SysDictItem> {
  constructor(@InjectRepository(SysDictItem) repo: Repository<SysDictItem>) {
    super(repo);
  }
}
