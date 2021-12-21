import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { CrudService } from './crud.service';
import { DemoCrudEntity } from './curd.entity';

@ApiTags('crud demo展示')
@Crud({
  model: {
    type: DemoCrudEntity,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('demo_crud')
export class CrudDemoController implements CrudController<DemoCrudEntity> {
  constructor(public service: CrudService) {
  }
}
