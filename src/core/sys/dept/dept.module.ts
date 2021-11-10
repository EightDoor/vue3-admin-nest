import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeptController } from './dept.controller';
import { SysDept } from './dept.entity';
import { DeptService } from './dept.service';

@Module({
  imports: [TypeOrmModule.forFeature([SysDept])],
  controllers: [DeptController],
  providers: [DeptService],
})
export class DeptModule { }
