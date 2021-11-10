import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SysUser } from './user.entity';
import utils from 'src/utils/index';
import { SysUserRole } from './userRole.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<SysUser> {
  constructor(
    @InjectRepository(SysUser) repo: Repository<SysUser>,
    @InjectRepository(SysUserRole)
    private readonly userRole: Repository<SysUserRole>,
  ) {
    super(repo);
  }
  async createOne(req: CrudRequest, dto: SysUser): Promise<SysUser> {
    const data = dto;
    dto.passWord = utils.PasswordEncryPtion(data.passWord);
    const result = await this.repo.save(data);
    return result;
  }
  async updateOne(req: CrudRequest, dto: SysUser): Promise<SysUser> {
    if (dto.passWord) {
      dto.passWord = utils.PasswordEncryPtion(dto.passWord);
    }
    const { id } = this.getParamFilters(req.parsed);
    await this.repo.update(id, dto);
    return dto;
  }
  async deleteOne(req: CrudRequest): Promise<SysUser> {
    const params = this.getParamFilters(req.parsed);
    // 先删除用户存在的角色
    await this.userRole
      .createQueryBuilder()
      .where('user_id = :id', { id: params.id })
      .delete()
      .execute();
    const reuslt = await this.repo.delete(params.id);
    return reuslt.raw;
  }
}
