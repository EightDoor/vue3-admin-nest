import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import config from 'src/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payload } from './auth.service';
import { SysUser } from '../sys/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(SysUser) private readonly userRepo: Repository<SysUser>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secret,
    });
  }

  // TODO 待优化 存储到redis中  减少查询次数
  async validate(payload: Payload): Promise<Payload> {
    // 查询用户是否有效
    const user = await this.userRepo.findOne(payload.userId);
    if (!user?.id) {
      throw new UnauthorizedException();
    }
    return {
      userId: payload.userId,
      username: payload.username,
    };
  }
}
