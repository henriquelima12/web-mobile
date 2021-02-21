import { Aluno } from './aluno.schema';
import { AlunosService } from './alunos.service';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
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
    readByTia(params: any): Promise<import("./aluno.schema").AlunoDocument>;
    readByCurso(params: any): Promise<import("./aluno.schema").AlunoDocument[]>;
    update(params: any, aluno: Aluno): Promise<import("./aluno.schema").AlunoDocument>;
    delete(params: any): Promise<import("./aluno.schema").AlunoDocument>;
}
