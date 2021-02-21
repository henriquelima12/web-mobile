import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto} from './produto.schema';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtoService: ProdutosService){}

    @Get()
    async getAll(){
        return this.produtoService.getAll();
    }

    @Post()
    async create(@Body() produto: Produto){
        return this.produtoService.create(produto);
    }

    @Get(':codigoProduto')
    async readByTia(@Param() params){
        const produto = this.produtoService.getByIdProduto(params.codigoProduto);
        return produto;    
    }

    @Put(':codigoProduto')
    async update(@Param('codigoProduto') codigoProduto: string, @Body() produto: Produto){
        return this.produtoService.update(codigoProduto, produto);
    }

    @Delete(':codigoProduto')
    async delete(@Param('codigoProduto') codigoProduto: string){
        this.produtoService.delete(codigoProduto);

    }


    
}
