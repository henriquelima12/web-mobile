import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Prop({unique: true, required: true})
  codigoProduto: string;

  @Prop({required: true})
  nome: string;

  @Prop({required: true})
  marca: string;

  @Prop({required: true})
  tamanho: number;

  @Prop({required: true})
  cor: string;

  @Prop({required: true})
  precoCusto: number;

  @Prop({required: true})
  precoVenda: number;

  @Prop({required: true})
  quantidadeEstoque: number;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);