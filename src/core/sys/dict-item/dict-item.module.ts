import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictItemController } from './dict-item.controller';
import { SysDictItem } from './dict-item.entity';
import { DictItemService } from './dict-item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SysDictItem]),
  ],
  controllers: [DictItemController],
  providers: [DictItemService],
})
export class DictItemModule { }
