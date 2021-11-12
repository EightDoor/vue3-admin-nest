import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQueryParams } from '@nestjsx/crud-request'
import { SysUserRole } from './userRole.entity';
import R, { RType } from 'src/utils/R';
import { SysUserRoleUpdate } from './user.controller';


@Injectable()
export class SysUserRoleService {
  constructor(
    @InjectRepository(SysUserRole)
    private readonly repo: Repository<SysUserRole>,
  ) {
    //
  }

  async getUserRoleList(id: string, query: CreateQueryParams): Promise<RType<SysUserRole[]>> {
    return R.list<SysUserRole>(this.repo, {
      page: query.page,
      limit: query.limit,
      params: `user_id=${id}`
    })
  }

  async setUserRole(body: SysUserRoleUpdate): Promise<boolean> {
    // 存在先删除
    await this.repo.createQueryBuilder().where(`user_id = ${body.userId}`).delete().execute()
    for (let i = 0; i < body.data.length; i += 1) {
      const item = body.data[i];
      await this.repo.save(item);
    }
    return true;
  }
}
