import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { BusinessModule } from './business/business.module';
import LoggingInterceptor from './Interceptor/logging.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    ShareModule,
    CoreModule,
    BusinessModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    Logger,
  ],
})
export class AppModule {}
