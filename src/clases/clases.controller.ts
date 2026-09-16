import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ClasesService } from './clases.service.js';
import type { ActualizarClaseDTO } from './dto/editar-clase.dto.js';
import type { CrearClaseDTO } from './dto/crear-clase.dto.js';

@Controller('clases')
export class ClasesController {


    constructor(private readonly clasesService: ClasesService) { }



    @Get() 
    listar(){
        return this.clasesService.listar();
    }

    @Post()
    @HttpCode(201)
    crear(@Body() dto: CrearClaseDTO) {
        return this.clasesService.crear(dto);
    }



    @Patch(':id')
    async actualizar(@Body() dto: ActualizarClaseDTO, @Param('id') id: string) {
        const claseActualizada = await this.clasesService.actualizar(Number(id), dto);
        if (!claseActualizada) {
            throw new NotFoundException(`No existe la clase con id ${id}`);
        }
        return claseActualizada;
    }


    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        const claseEliminada = await this.clasesService.eliminar(Number(id));
        if (!claseEliminada) {
            throw new NotFoundException(`No existe la clase con id ${id}`);
        }
        return claseEliminada;
    }
}