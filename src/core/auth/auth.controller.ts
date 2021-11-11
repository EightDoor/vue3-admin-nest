import {
  Post,
  UseGuards,
  Request,
  Controller,
  Get,
  Body,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthService, ReToken } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginEntiry } from './login.entity';
import { RType } from '../../utils/R';

@ApiTags('验证auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  // 登录
  @ApiBody({
    type: 'string',
    schema: {
      example: {
        username: '',
        password: '',
      },
    },
  })
  @Post('login')
  async login(@Body() body: LoginEntiry): Promise<RType<ReToken>> {
    return this.authService.login(body);
  }

  // 用户信息
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer ',
  })
  @UseGuards(JwtAuthGuard)
  @Get('userInfo')
  getUserInfo(@Request() req: any): Promise<any> {
    return this.authService.getUserInfo(req.user);
  }
}
