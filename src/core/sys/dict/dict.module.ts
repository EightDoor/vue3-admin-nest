import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictController } from './dict.controller';
import { SysDict } from './dict.entity';
import { DictService } from './dict.service';

@Module({
  imports: [TypeOrmModule.forFeature([SysDict])],
  controllers: [DictController],
  providers: [DictService],
})
export class DictModule { }
