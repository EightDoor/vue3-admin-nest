import 'reflect-metadata'; // 引入一下
import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';
// 申明appModule之前
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
      logger: false,
    },
  );
  // logger
  const nestWinston = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(nestWinston);

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
