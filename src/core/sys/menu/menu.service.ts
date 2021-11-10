import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysMenu } from './menu.entity';

@Injectable()
export class MenuService extends TypeOrmCrudService<SysMenu> {
  constructor(@InjectRepository(SysMenu) repo: Repository<SysMenu>) {
    super(repo)
  }
}
