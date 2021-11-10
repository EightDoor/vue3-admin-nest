import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityManager,
  Repository,
  Transaction,
  TransactionManager,
} from 'typeorm';
import { SysRoleMenu } from './roleMenu.entity';

@Injectable()
export class RoleMenuService {
  constructor(
    @InjectRepository(SysRoleMenu)
    private readonly repo: Repository<SysRoleMenu>,
  ) {}

  @Transaction()
  // 角色关联菜单
  async RoleRelationMenu(
    body: SysRoleMenu,
    @TransactionManager() manager: EntityManager,
  ): Promise<SysRoleMenu> {
    // 先删除拥有菜单
    await manager
      .createQueryBuilder()
      .delete()
      .from(SysRoleMenu)
      .where('role_id = :id', { id: body.roleId })
      .execute();
    // 保存新的菜单
    return manager.save(SysRoleMenu, body);
  }

  async getRoleMenus(id: string): Promise<SysRoleMenu> {
    let result: SysRoleMenu = { id: 0 };
    const value = await this.repo.findOne({
      where: { roleId: id },
    });
    if (value) {
      result = value;
    }
    return result;
  }
}
