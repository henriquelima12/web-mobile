import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Usuario} from './usuario.schema';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuarioService: UsuariosService){}

    @Get()
    async getAll(){
        return this.usuarioService.getAll();
    }

    @Post()
    async create(@Body() usuario: Usuario){
        return this.usuarioService.create(usuario);
    }

    @Get(':cpf')
    async readByCpf(@Param() params){
        const usuario = this.usuarioService.getByCpf(params.cpf);
        return usuario;    
    }

    @Put(':cpf')
    async update(@Param('cpf') cpf: string, @Body() usuario: Usuario){
        return this.usuarioService.update(cpf, usuario);
    }

    @Delete(':cpf')
    async delete(@Param('cpf') cpf: string){
        this.usuarioService.delete(cpf);

    }
}
