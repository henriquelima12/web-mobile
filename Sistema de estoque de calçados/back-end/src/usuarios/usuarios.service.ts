import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './usuario.schema';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel('Usuario') private usuarioModel: Model<UsuarioDocument>) {}

    async getAll(){
        return await this.usuarioModel.find().exec();
    }

    async create(usuario: Usuario){
        const newUsuario = new this.usuarioModel(usuario);
        return await newUsuario.save();
    }

    async getByCpf(cpf: string){
        return await this.usuarioModel.findOne({cpf: cpf}).exec();
    }

    async update(cpf: string, usuario: Usuario){
        await this.usuarioModel.updateOne({cpf: cpf}, usuario).exec();
        return this.getByCpf(cpf);
    }
    
    async delete(cpf: string){
        return await this.usuarioModel.deleteOne({cpf: cpf}).exec();
    }
}
