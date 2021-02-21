import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoSchema } from './aluno.schema';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Aluno', schema: AlunoSchema}])],
  controllers: [AlunosController],
  providers: [AlunosService]
})
export class AlunosModule {}
