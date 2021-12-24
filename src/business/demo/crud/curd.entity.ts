import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty } from 'class-validator';
import { BaseColumn } from 'src/common_model/baseModal';
import { Column, Entity } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('demo_crud')
export class DemoCrudEntity extends BaseColumn {
  @ApiProperty({
    description: '标题',
  })
  @Column({
    name: 'title',
    type: 'varchar',
    comment: '标题',
  })

    title!: string;

  @ApiProperty({
    description: '内容',
  })
  @Column({
    name: 'content',
    type: 'varchar',
    comment: '内容',
  })
    content!: string;

  @ApiProperty({
    description: 'type',
  })

  @Column({
    name: 'type',
    type: 'varchar',
    comment: '类型',
  })

    type!: string;
}
