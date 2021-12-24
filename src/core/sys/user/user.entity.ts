import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { BaseColumn } from 'src/common_model/baseModal';
import { Entity, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

const { CREATE } = CrudValidationGroups;

@Entity('sys_user')
export class SysUser extends BaseColumn {
  @ApiProperty({
    description: '密码',
    required: false,
  })
  @IsNotEmpty({ groups: [CREATE] })
  // 密码
  @Column({
    name: 'pass_word',
    comment: '密码',
    select: false,
    nullable: true,
    // transformer: {
    //   to: (value: string) => {
    //     console.log(value, 'value')
    //     // 用户密码最多20位，  判断如果大于60位就是加密过的
    //     const r = value && value.length > 60 ?value:utils.PasswordEncryPtion(value)
    //     return r
    //   },
    //   from: (val: string) => {
    //     return val
    //   }
    // }
  })
    passWord!: string;

  @ApiProperty({
    description: '账户',
  })
  @IsNotEmpty({ groups: [CREATE] })
  // 账户
  @Column({
    name: 'account',
    comment: '账户',
  })
    account!: string;

  @ApiProperty({
    description: '昵称',
  })
  @IsNotEmpty({ groups: [CREATE] })
  // 昵称
  @Column({
    name: 'nick_name',
    comment: '昵称',
  })
    nickName!: string;

  @ApiProperty({
    description: '邮箱',
    required: false,
  })
  // 邮箱
  @Column({
    name: 'email',
    comment: '邮箱',
    nullable: true,
  })
    email?: string;

  @ApiProperty({
    description: '所属状态是否有效  1是有效 0是失效',
  })
  @IsNotEmpty({ groups: [CREATE] })
  // 所属状态是否有效  1是有效 0是失效
  @Column({
    name: 'status',
    comment: '所属状态是否有效  1是有效 0是失效',
    type: 'tinyint',
  })
    status!: number;

  @ApiProperty({
    description: '头像',
    required: false,
  })
  // 头像
  @Column({
    name: 'avatar',
    comment: '头像',
    nullable: true,
  })
    avatar?: string;

  @ApiProperty({
    description: '部门id',
  })
  @IsNotEmpty({ groups: [CREATE] })
  // 部门id
  @Column({
    name: 'dept_id',
    comment: '部门id',
  })
    deptId!: string;

  @ApiProperty({
    description: '手机号码',
    required: false,
  })
  // 手机号码
  @Column({
    name: 'phone_num',
    comment: '手机号码',
    nullable: true,
  })
    phoneNum?: string;
}
