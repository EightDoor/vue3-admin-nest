import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common_model/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_user_role')
export class SysUserRole extends BaseColumn {
  @ApiProperty({
    description: '角色id',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'user_id',
    type: 'int',
    comment: '角色id',
  })
    userId?: number;

  @ApiProperty({
    description: '角色id',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'role_id',
    type: 'varchar',
    length: 255,
    comment: '角色id',
  })
    roleId?: string;
}
