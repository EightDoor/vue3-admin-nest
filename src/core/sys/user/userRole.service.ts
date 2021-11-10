import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SysUserRole } from './userRole.entity';

@Injectable()
export class SysUserRoleService {
  constructor(
    @InjectRepository(SysUserRole)
    private readonly repo: Repository<SysUserRole>,
  ) {}

  async getUserRoleList(id: string): Promise<SysUserRole> {
    let value = { id: 0 };
    const result = await this.repo
      .createQueryBuilder()
      .where('user_id = :id', { id })
      .getOne();
    if (result) {
      value = result;
    }
    return value;
  }

  async setUserRole(body: SysUserRole): Promise<SysUserRole> {
    // 存在先删除
    await this.repo
      .createQueryBuilder()
      .where('user_id = :id', { id: body.userId })
      .delete()
      .execute();
    return await this.repo.save(body);
  }
}
