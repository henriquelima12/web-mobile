import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Aluno } from './aluno.schema';
import { AlunosService } from './alunos.service';

@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunosService: AlunosService) {}

    @Post()
    async create(@Body() aluno: Aluno) {
        const result = await this.alunosService.create(aluno);

        if(result == undefined) {
            throw new HttpException('O TIA deve ser único e todos os parâmetros precisam ser informados', HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Get()
    async readAll() {
        return await this.alunosService.readAll();
    }

    @Get(':tia')
    async readByTia(@Param() params) {
        const result = await this.alunosService.readByTia(params.tia);

        if (result == undefined) {
            throw new NotFoundException();
        }

        return result;
    }

    @Get('/cursos/:tia')
    async readByCurso(@Param() params) {
        return await this.alunosService.readByCurso(params.id);
    }

    @Put(':tia')
    async update(@Param() params, @Body() aluno: Aluno) {
        const result = await this.alunosService.update(params.tia, aluno);

        if(result == undefined) {
            throw new NotFoundException();
        }

        return result;
    }

    @Delete(':tia')
    async delete(@Param() params) {
        const result = await this.alunosService.delete(params.tia);
        if (result == undefined) {
            throw new NotFoundException();
        }
        return result;
    }
}
