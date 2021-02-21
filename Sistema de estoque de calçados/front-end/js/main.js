function adiconarProduto() {

    var produto = {
        codigoProduto: document.getElementById('formCodigo').value,
        nome: document.getElementById('formNome').value,
        marca: document.getElementById('formMarca').value,
        tamanho: document.getElementById('formTamanho').value,
        cor: document.getElementById('formCor').value,
        precoCusto: document.getElementById('formPrecoCusto').value,
        precoVenda: document.getElementById('formPrecoVenda').value,
        quantidadeEstoque: document.getElementById('formQuantidadeItens').value,
    }
    
    createProduto(produto, function(status, dados) {
        if(status < 200 || status > 299 ) {
            alert("Verifique se o código já pertence à algum produto ou se os campos estão preenchidos corretamente");
        }
        
        document.getElementById('formCodigo').value='';
        document.getElementById('formNome').value='';
        document.getElementById('formMarca').value='';
        document.getElementById('formTamanho').value='';
        document.getElementById('formCor').value='';
        document.getElementById('formPrecoCusto').value='';
        document.getElementById('formPrecoVenda').value='';
        document.getElementById('formQuantidadeItens').value='';

        window.location.href = "estoque.html";
    });
}

function mostrarProdutos() {
    readAll(function (status, dados) {
        if(status < 200 || status > 299 ) {
            alert('Erro ao carregar os dados');
        }
        
        document.getElementById("produtos").innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            var produto = dados[i];

            document.getElementById("produtos").innerHTML += "<div>"+
            "<strong>" + produto.nome +' '+produto.cor+ ' ' +produto.tamanho+"</strong>" +
            "<p> Codigo do Produto: " + produto.codigoProduto + "</p>" +
            "<p> Marca: " + produto.marca + "</p>" +
            "<p> Preço de Custo: R$ " + produto.precoCusto + "</p>" +
            "<p> Preço de Venda: R$ " + produto.precoVenda + "</p>" +
            "<p> Quantidade em estoque: " + produto.quantidadeEstoque + "</p>" +
            "<button onclick=\"atualizarForm('" + produto.codigoProduto + "')\" class='edit'>Editar</button>"+
            "<button onclick=\"apagarProduto('" + produto.codigoProduto + "')\"class='delete'>Deletar</button>"+
            "</div>";
            
        }
    });
}


function atualizarForm(codigoProduto) {
    readByCodigo(codigoProduto,function (status, dados) {
        
        document.getElementById('formCodigoUp').value = dados.codigoProduto;
        document.getElementById('formNomeUp').value = dados.nome;
        document.getElementById('formMarcaUp').value = dados.marca;
        document.getElementById('formTamanhoUp').value = dados.tamanho;
        document.getElementById('formCorUp').value = dados.cor;
        document.getElementById('formPrecoCustoUp').value = dados.precoCusto;
        document.getElementById('formPrecoVendaUp').value = dados.precoVenda;
        document.getElementById('formQuantidadeItensUp').value = dados.quantidadeEstoque;
        
        formul.formQuantidadeItensUp.focus();
    });

}

function atualizarProduto() {
    var produto = {
        codigoProduto: document.getElementById('formCodigoUp').value,
        nome: document.getElementById('formNomeUp').value,
        marca: document.getElementById('formMarcaUp').value,
        tamanho: document.getElementById('formTamanhoUp').value,
        cor: document.getElementById('formCorUp').value,
        precoCusto: document.getElementById('formPrecoCustoUp').value,
        precoVenda: document.getElementById('formPrecoVendaUp').value,
        quantidadeEstoque: document.getElementById('formQuantidadeItensUp').value,
    }
    
    updateProduto(produto, function(status, dados) {
        if(status < 200 || status > 299 ) {
            alert('Não foi possível alterar os dados do produto');
        }
        
        document.getElementById('formCodigoUp').value='';
        document.getElementById('formNomeUp').value='';
        document.getElementById('formMarcaUp').value='';
        document.getElementById('formTamanhoUp').value='';
        document.getElementById('formCorUp').value='';
        document.getElementById('formPrecoCustoUp').value='';
        document.getElementById('formPrecoVendaUp').value='';
        document.getElementById('formQuantidadeItensUp').value='';

        window.location.reload();

    });
}

function apagarProduto(codigoProduto) {
    if(confirm("Deseja apagar dados do produto com o codigo " + codigoProduto + "?")) {
        deleteProduto(codigoProduto, function(status, dados) {
            if(status < 200 || status > 299 ) {
                alert("Erro ao apagar produto");
                return;
            }
            window.location.reload()
        });
    } else {
        alert('Ação de apagar foi cancelada');
    }
}

//

function redirect(){
    window.location.href = "estoque.html";
}






