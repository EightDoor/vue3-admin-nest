import {
  Body, Controller, Get, Param, Post, Query, UseGuards,
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { SysUser } from './user.entity';
import { SysUserRole } from './userRole.entity';
import { SysUserRoleService } from './userRole.service';
import { RequestQueryParser } from '@nestjsx/crud-request'
import R, { RType } from 'src/utils/R';

export interface SysUserRoleUpdate {
  userId: number;
  data: SysUserRole[]
}
@ApiTags('用户管理')
@Crud({
  model: {
    type: SysUser,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController implements CrudController<SysUser> {
  constructor(
    public service: UserService,
    public userRoleService: SysUserRoleService,
  ) { }

  // 查询当前拥有角色
  @Get('roleList/:id')
  getUserRoleList(@Param() params: { id: string }, @Query() query: RequestQueryParser): Promise<RType<SysUserRole[]>> {
    return this.userRoleService.getUserRoleList(params.id, query);
  }

  // 设置用户角色
  @Post('userRole')
  async setUserRole(@Body() body: SysUserRoleUpdate): Promise<RType<boolean>> {
    const result = await this.userRoleService.setUserRole(body);
    return R.success(result)
  }
}
