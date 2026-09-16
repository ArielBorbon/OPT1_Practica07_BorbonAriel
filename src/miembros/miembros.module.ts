import { Module } from '@nestjs/common';
import { MiembrosService } from './miembros.service.js';
import { MiembrosController } from './miembros.controller.js';

@Module({
  controllers: [MiembrosController],
  providers: [MiembrosService],
})
export class MiembrosModule {}
