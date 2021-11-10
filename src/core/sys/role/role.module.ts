import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { SysRole } from './role.entity';
import { RoleService } from './role.service';
import { SysRoleMenu } from './roleMenu.entity';
import { RoleMenuService } from './roleMenu.service';

@Module({
  imports: [TypeOrmModule.forFeature([SysRole, SysRoleMenu])],
  controllers: [RoleController],
  providers: [RoleService, RoleMenuService],
})
export class RoleModule {}
