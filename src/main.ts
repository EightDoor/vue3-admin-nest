import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';
import { AppModule } from './app.module';
// crud全局配置
CrudConfigService.load({
  query: {
    limit: 10,
    maxLimit: 5000,
    cache: 2000,
  },
  routes: {
    updateOneBase: {
      allowParamsOverride: true,
    },
    deleteOneBase: {
      returnDeleted: true,
    },
  },
});

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      // 关闭cors
      cors: false,
      // 关闭自带日志
      logger: WinstonModule.createLogger({
        level: 'silly',
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
    },
  );

  // swagger
  const config = new DocumentBuilder()
    .setTitle('react-nest-admin后台管理')
    .setDescription('后台接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(8081, '0.0.0.0');
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
