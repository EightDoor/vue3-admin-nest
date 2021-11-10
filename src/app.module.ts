import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { BusinessModule } from './business/business.module';
import { LoggerModule } from 'nestjs-pino';
import { pinoHttpOption } from './config/pino-http-option.config';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { pinoHttp: pinoHttpOption(configService.get('NODE_ENV')) };
      },
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),

    ShareModule,
    CoreModule,
    BusinessModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
