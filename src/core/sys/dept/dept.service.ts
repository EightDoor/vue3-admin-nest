import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysDept } from './dept.entity';

@Injectable()
export class DeptService extends TypeOrmCrudService<SysDept> {
  constructor(@InjectRepository(SysDept) repo: Repository<SysDept>) {
    super(repo);
  }
}
