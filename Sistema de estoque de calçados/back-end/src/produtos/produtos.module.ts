import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoSchema } from './produto.schema';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Produto", schema: ProdutoSchema }])],
  controllers: [ProdutosController],
  providers: [ProdutosService]
})
export class ProdutosModule {}
