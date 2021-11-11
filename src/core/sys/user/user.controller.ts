import {
  Body, Controller, Get, Param, Post, UseGuards,
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { SysUser } from './user.entity';
import { SysUserRole } from './userRole.entity';
import { SysUserRoleService } from './userRole.service';

@ApiTags('用户管理')
@Crud({
  model: {
    type: SysUser,
  },
})

@Controller('user')
export class UserController implements CrudController<SysUser> {
  constructor(
    public service: UserService,
    public userRoleService: SysUserRoleService,
  ) { }

  // 查询当前拥有角色
  @Get('roleList/:id')
  getUserRoleList(@Param() params: { id: string }): Promise<SysUserRole> {
    return this.userRoleService.getUserRoleList(params.id);
  }

  // 设置用户角色
  @Post('userRole')
  setUserRole(@Body() body: SysUserRole): Promise<SysUserRole> {
    return this.userRoleService.setUserRole(body);
  }
}
