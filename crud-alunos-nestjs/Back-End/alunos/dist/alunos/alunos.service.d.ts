import { Model } from 'mongoose';
import { Aluno, AlunoDocument } from './aluno.schema';
export declare class AlunosService {
    private alunoModel;
    constructor(alunoModel: Model<AlunoDocument>);
    create(aluno: Aluno): Promise<{
        nome: string;
        tia: string;
        curso: string;
        foto: string;
    }>;
    readAll(): Promise<{
        nome: string;
        tia: string;
        curso: string;
        foto: string;
    }[]>;
    readByTia(tia: string): Promise<AlunoDocument>;
    readByCurso(curso: string): Promise<AlunoDocument[]>;
    update(tia: string, aluno: Aluno): Promise<AlunoDocument>;
    delete(tia: string): Promise<AlunoDocument>;
}
