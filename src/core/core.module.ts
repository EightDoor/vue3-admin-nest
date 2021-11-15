import { Module } from '@nestjs/common';
import { CommMethodsModule } from 'src/comm_method/comm_method.module';
import { AuthModule } from './auth/auth.module';
import { SysModule } from './sys/sys.module';

@Module({
  imports: [SysModule, AuthModule, CommMethodsModule],
})
export class CoreModule { }
