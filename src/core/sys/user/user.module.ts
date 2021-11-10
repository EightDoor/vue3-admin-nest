import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { SysUser } from './user.entity';
import { UserService } from './user.service';
import { SysUserRole } from './userRole.entity';
import { SysUserRoleService } from './userRole.service';

@Module({
  imports: [TypeOrmModule.forFeature([SysUser, SysUserRole])],
  controllers: [UserController],
  providers: [UserService, SysUserRoleService],
  exports: [UserService],
})
export class UserModule {}
