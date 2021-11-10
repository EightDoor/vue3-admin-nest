import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { SysMenu } from '../sys/menu/menu.entity';
import { SysRole } from '../sys/role/role.entity';
import { RoleModule } from '../sys/role/role.module';
import { SysRoleMenu } from '../sys/role/roleMenu.entity';
import { SysUser } from '../sys/user/user.entity';
import { UserModule } from '../sys/user/user.module';
import { SysUserRole } from '../sys/user/userRole.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    RoleModule,
    JwtModule.register({
      secret: config.secret,
      signOptions: {
        expiresIn: config.expiresIn,
      },
    }),
    TypeOrmModule.forFeature([
      SysUser,
      SysUserRole,
      SysRoleMenu,
      SysRole,
      SysMenu,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
