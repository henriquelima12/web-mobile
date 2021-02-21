import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto, ProdutoDocument } from './produto.schema';

@Injectable()
export class ProdutosService {
    constructor(@InjectModel('Produto') private produtoModel: Model<ProdutoDocument>) {}

    async getAll(){
        return await this.produtoModel.find().exec();
    }

    async create(produto: Produto){
        const newProduto = new this.produtoModel(produto);
        return await newProduto.save();
    }

    async getByIdProduto(codigoProduto: string){
        return await this.produtoModel.findOne({codigoProduto: codigoProduto}).exec();
    }

    async update(codigoProduto: string, produto: Produto){
        await this.produtoModel.updateOne({codigoProduto: codigoProduto}, produto).exec();
        return this.getByIdProduto(codigoProduto);
    }
    
    async delete(codigoProduto: string){
        return await this.produtoModel.deleteOne({codigoProduto: codigoProduto}).exec();
    }

    


}
