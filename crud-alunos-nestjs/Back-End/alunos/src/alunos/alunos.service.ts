import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno, AlunoDocument } from './aluno.schema';

@Injectable()
export class AlunosService {
    constructor(@InjectModel('Aluno') private alunoModel:Model<AlunoDocument>) {}

    async create(aluno: Aluno) {
        const newAluno = new this.alunoModel(aluno);

        try {
            return Aluno.clean(await newAluno.save());
        } catch(error) {
            return undefined;
        }
    }

    async readAll() {
        const result = await this.alunoModel.find().exec();
        return result.map(Aluno.clean);
    }

    async readByTia(tia: string) {
        return await this.alunoModel.findOne({'tia': tia});
    }

    async readByCurso(curso: string) {
        return await this.alunoModel.find({'curso': curso}).exec();
    }

    async update(tia: string, aluno: Aluno) {
        const query = {'tia': tia};
        const update = {
            'nome': aluno.nome,
            'curso': aluno.curso,
            'foto': aluno.foto
        };
        const options = {new: true};

        return this.alunoModel.findOneAndUpdate(query,update,options);
    }

    async delete(tia: string) {
        return await this.alunoModel.findOneAndDelete({'tia': tia});
    }
}
