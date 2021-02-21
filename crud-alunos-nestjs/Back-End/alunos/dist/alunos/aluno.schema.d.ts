import { Document } from 'mongoose';
export declare type AlunoDocument = Aluno & Document;
export declare class Aluno {
    nome: string;
    tia: string;
    curso: string;
    foto: string;
    static clean(aluno: Aluno): {
        nome: string;
        tia: string;
        curso: string;
        foto: string;
    };
}
export declare const AlunoSchema: import("mongoose").Schema<any>;
