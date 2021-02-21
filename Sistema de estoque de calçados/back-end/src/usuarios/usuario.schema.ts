import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({required: true})
  nome: string;

  @Prop({unique: true, required: true})
  cpf: string;

  @Prop({required: true})
  cargo: string;

  @Prop({required: true})
  telefone: string;

  @Prop({required: true})
  email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);