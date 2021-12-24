import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import utils from 'src/utils/index';
import { SysUser } from './user.entity';
import { SysUserRole } from './userRole.entity';
import { UpdatePasswdType } from './user.controller';

@Injectable()
export class UserService extends TypeOrmCrudService<SysUser> {
  constructor(
    @InjectRepository(SysUser) repo: Repository<SysUser>,
    @InjectRepository(SysUserRole)
    private readonly userRole: Repository<SysUserRole>,
    private readonly logger: Logger,
  ) {
    super(repo);
  }

  createOne(req: CrudRequest, dto: SysUser): Promise<SysUser> {
    const data = dto;
    data.passWord = utils.PasswordEncryPtion(data.passWord);
    this.logger.log(data);
    return this.repo.save(data);
  }

  async updateOne(req: CrudRequest, dto: SysUser): Promise<SysUser> {
    const data = dto;
    if (data.passWord) {
      data.passWord = utils.PasswordEncryPtion(data.passWord);
    }
    const { id } = this.getParamFilters(req.parsed);
    await this.repo.update(id, data);
    return data;
  }

  async deleteOne(req: CrudRequest): Promise<SysUser> {
    const params = this.getParamFilters(req.parsed);
    // 先删除用户存在的角色
    await this.userRole
      .createQueryBuilder()
      .where('user_id = :id', { id: params.id })
      .delete()
      .execute();
    const result = await this.repo.delete(params.id);
    return result.raw;
  }

  async updatePasswd(data: UpdatePasswdType): Promise<boolean> {
    const result = await this.repo.update(data.id, { passWord: utils.PasswordEncryPtion(data.password) });
    if (result.affected && result.affected > 0) {
      return true;
    }
    return false;
  }
}
