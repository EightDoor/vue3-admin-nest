import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { DeptModule } from './dept/dept.module';
import { MenuModule } from './menu/menu.module';
import { DictModule } from './dict/dict.module';
import { DictItemModule } from './dict-item/dict-item.module';

@Module({
  imports: [
    UserModule,
    RoleModule,
    DeptModule,
    MenuModule,
    DictModule,
    DictItemModule,
  ],
})
export class SysModule {}
