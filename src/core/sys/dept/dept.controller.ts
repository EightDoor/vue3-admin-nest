import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/core/auth/jwt-auth.guard';
import { SysDept } from './dept.entity';
import { DeptService } from './dept.service';

@ApiTags("部门管理")
@Crud({
  model: {
    type: SysDept
  }
})
@UseGuards(JwtAuthGuard)
@Controller('dept')
export class DeptController implements CrudController<SysDept> {
  constructor(public service: DeptService) { }
}
