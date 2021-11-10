import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_dept')
export class SysDept extends BaseColumn {
  @ApiProperty({
    description: '父级id 一级是 0',
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
    description: '部门名称',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    comment: '部门名称',
  })
    name!: string;

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
}
