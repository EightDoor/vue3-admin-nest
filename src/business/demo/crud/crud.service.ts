import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DemoCrudEntity } from './curd.entity';

export class CrudService extends TypeOrmCrudService<DemoCrudEntity> {
  constructor(@InjectRepository(DemoCrudEntity) repo: Repository<DemoCrudEntity>) {
    super(repo);
  }
}
