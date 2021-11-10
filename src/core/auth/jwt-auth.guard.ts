import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { SysUser } from '../sys/user/user.entity';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 在这里添加自定义的认证逻辑
    // 例如调用 super.logIn(request) 来建立一个session
    return super.canActivate(context);
  }

  handleRequest(err: any, user: SysUser, info: any): any {
    // 可以抛出一个基于info或者err参数的异常
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
