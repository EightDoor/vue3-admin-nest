import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SysModule } from './sys/sys.module';

@Module({
  imports: [SysModule, AuthModule],
})
export class CoreModule {}
