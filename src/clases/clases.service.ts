import { Injectable, Inject  } from '@nestjs/common';

import { Clase } from './dominio/entidades.js';
import { CLASE_REPOSITORY } from './clases.token.js';
import type { ClaseMemoriaRepository } from './infra/clase-memoria-repository.js';
import { CrearClaseDTO } from './dto/crear-clase.dto.js';
import { ActualizarClaseDTO } from './dto/editar-clase.dto.js';

@Injectable()
export class ClasesService {

  constructor(
    @Inject(CLASE_REPOSITORY)
    private readonly repo: ClaseMemoriaRepository
  ) {}



  listar(): Promise<Clase[]> {
    return this.repo.listar();
  }

  buscar(id: number): Promise<Clase | null> {
    return this.repo.buscarPorId(id);
  }

  crear (dto: CrearClaseDTO): Promise<Clase> {
    return this.repo.crear(dto);
  }

  actualizar(id: number, dto: ActualizarClaseDTO): Promise<Clase | null> {
    return this.repo.actualizar(id, dto);
  }

  eliminar(id: number): Promise<Clase | null> {
    return this.repo.eliminar(id);
  }




}  