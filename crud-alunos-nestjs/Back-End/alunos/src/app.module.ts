import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aluno:123@02h11.qjzz0.mongodb.net/2H11?retryWrites=true&w=majority'),
    AlunosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
