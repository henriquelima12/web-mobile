import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://aluno:123@02h11.qjzz0.mongodb.net/AppEstoque?retryWrites=true&w=majority'), ProdutosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

