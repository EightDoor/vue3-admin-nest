import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common_model/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('sys_dict')
export class SysDict extends BaseColumn {
  @ApiProperty({
    description: '字典名称',
    required: true,
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE],
  })
  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    comment: '字典名称',
  })
    name!: string;

  @ApiProperty({
    description: '字典编号',
    required: false,
  })
  @Column({
    name: 'serial_number',
    type: 'varchar',
    length: 255,
    comment: '字典编号',
    nullable: true,
  })
    serialNumber!: string;

  @ApiProperty({
    description: '描述',
    required: false,
  })
  @Column({
    name: 'describe',
    type: 'varchar',
    length: 255,
    comment: '描述',
    nullable: true,
  })
    describe!: string;
}
