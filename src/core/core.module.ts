import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { CommMethodsModule } from 'src/comm_method/comm_method.module';
import { AuthModule } from './auth/auth.module';
import { SysModule } from './sys/sys.module';

@Module({
  imports: [SysModule, AuthModule, CommMethodsModule, BusinessModule],
})
export class CoreModule { }
