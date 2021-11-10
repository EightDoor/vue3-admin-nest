import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysDict } from './dict.entity';

@Injectable()
export class DictService extends TypeOrmCrudService<SysDict> {
  constructor(@InjectRepository(SysDict) repo: Repository<SysDict>) {
    super(repo);
  }
}
