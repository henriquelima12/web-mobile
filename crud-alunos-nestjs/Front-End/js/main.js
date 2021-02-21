function adiconarAluno() {

    var aluno = {
        nome: document.getElementById('nome').value,
        tia: document.getElementById('tia').value,
        curso: document.getElementById('curso').value,
        foto: document.getElementById('foto').value,
    }

    createAluno(aluno, function(status, dados) {
        if(status < 200 || status > 299 ) {
           alert('Não foi possível criar um novo aluno');
        }
        window.locaton.reload();

        document.getElementById('nome').value='';
        document.getElementById('tia').value='';
        document.getElementById('curso').value='';
        document.getElementById('foto').value='';
    });
}


function mostrarAlunos() {
    readAll(function (status, dados) {
        if(status < 200 || status > 299) {
            alert('Não foi possível realizar a conexão ao Banco de Dados');
        }
        
        document.getElementById("content").innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            var aluno = dados[i];

            document.getElementById("content").innerHTML += "<article>" +
            "<h1>" + aluno.nome + "</h1>" +
            "<p>tia: " + aluno.tia + "</p>" +
            "<p>curso: " + aluno.curso + "</p>" +
            "<img src='" + aluno.foto + "'/>"+
            "<section class='sec-button'>"+
            "<button onclick=\"atualizarForm('" + aluno.tia + "')\">Atualizar</button>"+
            "<button onclick=\"apagarAluno('" + aluno.tia + "')\">Apagar</button>"+
            "</section>"+
            "</article>";
        }
    });
}

function atualizarForm(tia) {
    readByTia(tia,function (status, dados) {
        if(status < 200 || status > 299 ) {
            alert('Não foi possível realizar a operação. Tente novamente')
        }
        
        document.getElementById("nomeUp").value = dados.nome;
        document.getElementById("tiaUp").value = dados.tia;
        document.getElementById("cursoUp").value = dados.curso;
        document.getElementById("fotoUp").value = dados.foto;

        nomeUp.focus();
        
    });
}

function atualizarAluno() {
    // Ler campos do formulário
    var aluno = {
        nome: document.getElementById('nomeUp').value,
        tia: document.getElementById('tiaUp').value,
        curso: document.getElementById('cursoUp').value,
        foto: document.getElementById('fotoUp').value,
    }
    
    updateAluno(aluno, function(status, dados) {

        alert('Dados atualizados com sucesso');
        
        document.getElementById("nomeUp").value = '';
        document.getElementById("tiaUp").value = '';
        document.getElementById("cursoUp").value = '';
        document.getElementById("fotoUp").value = '';
        
    });
}


function apagarAluno(tia) {
    if(confirm("Deseja apagar dados do aluno com o TIA " + tia + "?")) {
        deleteAluno(tia, function(status, dados) {
            if(status < 200 || status > 299 ) {
                alert('Erro ao apagar aluno');
                return;
            }

            window.location.reload()
        });
    } else {
        confirm('Ação de Apagar foi cancelada');
    }
}
