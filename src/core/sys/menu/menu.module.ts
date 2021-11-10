import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from './menu.controller';
import { SysMenu } from './menu.entity';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([SysMenu])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule { }
