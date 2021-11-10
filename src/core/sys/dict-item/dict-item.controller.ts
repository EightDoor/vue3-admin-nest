import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { SysDictItem } from './dict-item.entity';
import { DictItemService } from './dict-item.service';

@ApiTags('字典项')
@Crud({
  model: {
    type: SysDictItem,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('dict-item')
export class DictItemController implements CrudController<SysDictItem> {
  constructor(public service: DictItemService) { }
}
