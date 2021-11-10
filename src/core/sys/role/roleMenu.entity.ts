import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_role_menu')
export class SysRoleMenu extends BaseColumn {
  @ApiProperty({
    description: '角色id',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'role_id',
    type: 'int',
    comment: '角色id',
  })
    roleId?: number;

  @ApiProperty({
    description: '菜单id',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'menu_id',
    type: 'varchar',
    length: 255,
    comment: '菜单id',
  })
    menuId?: string;
}
