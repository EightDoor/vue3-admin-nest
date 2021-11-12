import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_menu')
export class SysMenu extends BaseColumn {
  @ApiProperty({
    description: '父级id 一级0',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'parent_id',
    type: 'int',
    comment: '父级id',
  })
  parentId!: number;

  @ApiProperty({
    description: '菜单名称',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'title',
    type: 'varchar',
    length: 32,
    comment: '菜单名称',
  })
  title!: number;

  @ApiProperty({
    description: '菜单类型： 1. 目录 2. 菜单  3. 按钮',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'type',
    type: 'tinyint',
    comment: '菜单类型： 1. 目录 2. 菜单  3. 按钮',
  })
  type!: number;

  @ApiProperty({
    description: '排序',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'order_num',
    type: 'int',
    comment: '排序',
  })
  orderNum!: number;

  @ApiProperty({
    description: '权限标识',
    required: false,
  })
  @Column({
    name: 'perms',
    type: 'varchar',
    length: 100,
    comment: '权限标识',
    nullable: true,
  })
  perms!: string;

  @ApiProperty({
    description: '菜单标识',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
    comment: '菜单标识',
  })
  name!: string;

  @Column({
    name: 'redirect',
    type: 'varchar',
    length: 100,
    comment: '重定向地址',
    nullable: true,
  })
  redirect!: string;

  @ApiProperty({
    description: '图标',
    required: false,
  })
  @Column({
    name: 'icon',
    type: 'varchar',
    length: 100,
    comment: '图标',
    nullable: true,
  })
  icon!: string;

  @ApiProperty({
    description: '是否隐藏',
    required: false,
  })
  @Column({
    name: 'hidden',
    type: 'tinyint',
    comment: '是否隐藏',
    nullable: true,
  })
  hidden!: string;

  @ApiProperty({
    description: '是否首页',
    required: false,
  })
  @Column({
    name: 'is_home',
    type: 'tinyint',
    comment: '是否首页',
    nullable: true,
  })
  isHome!: string;
}
