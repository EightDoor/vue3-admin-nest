import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysRole } from './role.entity';
import { SysRoleMenu } from './roleMenu.entity';

@Injectable()
export class RoleService extends TypeOrmCrudService<SysRole> {
  constructor(
@InjectRepository(SysRole) repo: Repository<SysRole>,
              @InjectRepository(SysRoleMenu)
              private readonly roleMenu: Repository<SysRoleMenu>,
  ) {
    super(repo);
  }

  async deleteOne(req: CrudRequest): Promise<SysRole> {
    const params = this.getParamFilters(req.parsed);
    // 先删除关联菜单 sys_role_menu
    await this.roleMenu.createQueryBuilder().delete().where('role_id = :id', { id: params.id }).execute();
    const result = await this.repo.delete(params.id);
    return result.raw;
  }
}
