import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './usuario.schema';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Usuario", schema: UsuarioSchema }])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
