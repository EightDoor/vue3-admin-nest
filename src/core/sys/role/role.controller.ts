import {
  Body, Controller, Get, Param, Post, UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import R, { RType } from 'src/utils/R';
import { EntityManager, TransactionManager } from 'typeorm';
import { SysRole } from './role.entity';
import { RoleService } from './role.service';
import { SysRoleMenu } from './roleMenu.entity';
import { RoleMenuService } from './roleMenu.service';

@ApiTags('角色管理')
@Crud({
  model: {
    type: SysRole,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleController implements CrudController<SysRole> {
  constructor(public service: RoleService, public menu: RoleMenuService) { }

  @Post('relationAndMenu')
  // 菜单关联
  async menuAssignment(
    @Body() body: SysRoleMenu,
    @TransactionManager() manager: EntityManager,
  ): Promise<RType<SysRoleMenu>> {
    const result = await this.menu.RoleRelationMenu(body, manager);
    return R.success(result);
  }

  @Get('menus/:id')
  // 关联菜单查询列表
  async getMenus(
    @Param() params: { id: string },
  ): Promise<RType<SysRoleMenu | null>> {
    const result = await this.menu.getRoleMenus(params.id);
    return R.success(result);
  }
}
