import { Injectable} from '@nestjs/common';
import {ClaseRepository} from '../dominio/clase.repository.js';
import {Clase} from '../dominio/entidades.js';
import {CrearClaseDTO} from '../dto/crear-clase.dto.js';
import {ActualizarClaseDTO} from '../dto/editar-clase.dto.js';

@Injectable()
export class claseMemoriaRepository implements ClaseRepository {
    private clases: Clase[] = [
        {id: 1, nombre: 'Yoga'},
        {id: 2, nombre: 'Spinning'},
    ];
        

    private siguienteId = 3;

    async listar(): Promise<Clase[]> {
        return this.clases;
    }

    buscarPorId(id: number): Promise<Clase | null> {
        return Promise.resolve(this.clases.find(c => c.id === id) ?? null);
    }


    async crear(datos: CrearClaseDTO ): Promise<Clase> {
        const nuevaClase: Clase = {
            id: this.siguienteId++,
            nombre: datos.nombre,
        };
        this.clases.push(nuevaClase);
        return nuevaClase;
    }

    async actualizar(id: number, datos: ActualizarClaseDTO): Promise<Clase | null> {
        const indice = this.clases.findIndex(c => c.id === id);
        if (indice === -1) {
            return null;
        }
        this.clases[indice] = { ...this.clases[indice], ...datos };
        return this.clases[indice];
    }

    async eliminar(id: number): Promise<Clase | null> {
        const indice = this.clases.findIndex(c => c.id === id);
        if (indice === -1) {
            return null;
        }
        const [claseEliminada] = this.clases.splice(indice, 1);
        return claseEliminada;

}


}