import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlunoDocument = Aluno & Document;

@Schema()
export class Aluno {
  @Prop({required: true})
  nome: string;

  @Prop({required: true,unique: true})
  tia: string;

  @Prop({required: true})
  curso: string;

  @Prop({required: false})
  foto: string

  static clean(aluno: Aluno) {
    return {
      nome: aluno.nome,
      tia: aluno.tia,
      curso: aluno.curso,
      foto: aluno.foto  || 'https://images.unsplash.com/photo-1567960110005-6be7e9f11e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
  }
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);