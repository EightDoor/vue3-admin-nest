// pino-http 配置
// https://github.com/pinojs/pino-http
import PinoHttp from 'pino-http';
export function pinoHttpOption(envDevMode = 'development'): PinoHttp.Options {
  return {
    customAttributeKeys: {
      req: '请求信息',
      res: '响应信息',
      err: '错误信息',
      responseTime: '响应时间(ms)',
    },
    level: envDevMode !== 'production' ? 'debug' : 'info',
    customLogLevel(res: { statusCode: number }, err: any) {
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return 'warn';
      } else if (res.statusCode >= 500 || err) {
        return 'error';
      }
      return 'info';
    },
    serializers: {
      req(req: {
        httpVersion: any;
        raw: { httpVersion: any; params: any; query: any; body: any };
        params: any;
        query: any;
        body: any;
        headers: any;
      }) {
        req.httpVersion = req.raw.httpVersion;
        req.params = req.raw.params;
        req.query = req.raw.query;
        req.body = req.raw.body;
        req.headers = '...';
        return req;
      },
      err(err: {
        params: any;
        raw: { params: any; query: any; body: any };
        query: any;
        body: any;
      }) {
        err.params = err.raw.params;
        err.query = err.raw.query;
        err.body = err.raw.body;
        return err;
      },
    },
    prettyPrint:
      envDevMode === 'development'
        ? {
            colorize: true,
            levelFirst: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
          }
        : false,
  };
}
