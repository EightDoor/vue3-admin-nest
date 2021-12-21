import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudDemoController } from './demo/crud/crud.controller';
import { CrudService } from './demo/crud/crud.service';
import { DemoCrudEntity } from './demo/crud/curd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DemoCrudEntity])],
  controllers: [CrudDemoController],
  providers: [CrudService],
})
export class BusinessModule {}
