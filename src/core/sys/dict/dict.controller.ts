import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { SysDict } from './dict.entity';
import { DictService } from './dict.service';

@ApiTags('字典管理')
@Crud({
  model: {
    type: SysDict,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('dict')
export class DictController implements CrudController<SysDict> {
  constructor(public service: DictService) { }
}
