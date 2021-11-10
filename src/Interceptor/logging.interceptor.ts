import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import R from '../utils/R';

@Injectable()
export default class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const [req] = context.getArgs();
    const now = Date.now();
    return next.handle().pipe(map((val) => {
      if (!val.code) {
        return R.success(val);
      }
      return val;
    })).pipe(tap((data) => {
      const msg = `
      ---------------开始----------------
      请求类: ${context.getClass().name}
      请求方法: ${context.getHandler().name}
      请求地址: ${req.raw.url}
      请求方式: ${req.raw.method}
      请求参数1: params -> ${JSON.stringify(req.params)}
      请求参数2: body -> ${JSON.stringify(req.body)}
      请求用时: ${Date.now() - now}ms
      响应数据: ${JSON.stringify(data)}
      ---------------结束----------------
      `;
      this.logger.debug(msg);
    }));
  }
}
