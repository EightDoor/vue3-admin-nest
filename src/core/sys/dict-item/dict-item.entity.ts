import { ApiProperty } from "@nestjs/swagger";
import { CrudValidationGroups } from "@nestjsx/crud";
import { IsNotEmpty } from "class-validator";
import { BaseColumn } from "src/common/baseModal";
import { Column, Entity } from "typeorm";
const { CREATE, UPDATE } = CrudValidationGroups

@Entity("sys_dict_item")
export class SysDictItem extends BaseColumn {

  @ApiProperty({
    description: "数据值",
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE]
  })
  @Column({
    name: "value",
    type: "varchar",
    length: 100,
    comment: "数据值",
  })
  value!: string;

  @ApiProperty({
    description: "名称",
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE]
  })
  @Column({
    name: "label",
    type: "varchar",
    length: 100,
    comment: "名称",
  })
  label!: string;

  @ApiProperty({
    description: "字典id",
  })
  @IsNotEmpty({
    groups: [CREATE, UPDATE]
  })
  @Column({
    name: "dict_id",
    type: "int",
    comment: "字典id",
  })
  dictId!: number;

  @ApiProperty({
    description: "描述",
    required: false
  })
  @Column({
    name: "describe",
    type: "varchar",
    length: 255,
    comment: "描述",
    nullable: true
  })
  describe!: string;
}