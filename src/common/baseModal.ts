import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


// 公共的表添加
export abstract class BaseColumn {
  @ApiProperty({
    description: "主键",
    required: false,
  })
  @PrimaryGeneratedColumn({
    name: "id",
    comment: "主键",
  })
  id!: number;

  @ApiProperty({
    description: "创建时间",
    required: false
  })
  @CreateDateColumn({
    name: "created_at",
    comment: "创建时间",
  })
  createdAt?: Date | string;

  @ApiProperty({
    description: "更新时间",
    required: false
  })
  @UpdateDateColumn({
    unique: false,
    name: "updated_at",
    comment: "更新时间",
  })
  updatedAt?: Date;

  @ApiProperty({
    description: "删除时间",
    required: false
  })
  @Column(
    {
      comment: "删除时间",
      name: "deleted_at",
      nullable: true,
    }
  )
  deletedAt?: Date;
}