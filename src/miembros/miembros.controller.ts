import { Controller } from '@nestjs/common';
import { MiembrosService } from './miembros.service.js';

@Controller('miembros')
export class MiembrosController {
  constructor(private readonly miembrosService: MiembrosService) {}
}
