import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('vue3-admin-nest', { prettyPrint: true }),
          ),
        }),
      ],
    }),
    ShareModule,
    CoreModule,
    BusinessModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
