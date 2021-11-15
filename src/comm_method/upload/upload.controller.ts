import {
  Body, Controller, Get, Param, Post, UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import R from 'src/utils/R';
import UploadService from './upload.service';

@UseGuards(JwtAuthGuard)
@Controller('/upload')
export default class UploadController {
  constructor(
    public uploadService: UploadService,
  ) {

  }

  @Get('/:id')
  async getToken(@Param() id: string) {
    if (id === 'zk') {
      const result = await this.uploadService.getToken();
      return R.success(result);
    }
    return R.error('口令不正确😁');
  }

  @Post('/del')
  async del(@Body() key: string) {
    const result = await this.uploadService.del(key);
    if (!result) {
      return R.success(result);
    }
    return R.error(result);
  }
}
