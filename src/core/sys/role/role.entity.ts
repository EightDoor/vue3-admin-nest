import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common/baseModal';
import { Column, Entity } from 'typeorm';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_role')
export class SysRole extends BaseColumn {
  @ApiProperty({
    description: '角色备注',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'remark',
    type: 'varchar',
    length: 100,
    comment: '角色备注',
  })
  remark!: string;

  @ApiProperty({
    description: '角色名称',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'role_name',
    type: 'varchar',
    length: 100,
    comment: '角色名称',
  })
  roleName!: string;
}
