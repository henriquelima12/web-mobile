function adiconarUsuario() {
    
    var usuario = {
        nome: document.getElementById('formNome').value,
        cpf: document.getElementById('formCpf').value,
        cargo: document.getElementById('formCargo').value,
        telefone: document.getElementById('formTelefone').value,
        email: document.getElementById('formEmail').value,
    }
    
    createUsuario(usuario, function(status, dados) {
        if(status < 200 || status > 299 ) {
            alert("Verifique se o CPF já pertence à algum usuário ou se os campos estão preenchidos corretamente");
        }

        document.getElementById('formNome').value='';
        document.getElementById('formCpf').value='';
        document.getElementById('formCargo').value='';
        document.getElementById('formTelefone').value='';
        document.getElementById('formEmail').value='';

        window.location.href = "usuarios.html";
    });
}

function mostrarUsuarios() {
    readAll(function (status, dados) {
        if(status < 200 || status > 299 ) {
            alert('Erro ao carregar os dados');
        }
        
        document.getElementsByTagName("main").innerHTML = "";
        
        for(var i=0; i<dados.length; i++) {
            var usuario = dados[i];

            document.getElementById("usuarios").innerHTML += "<div>"+
            "<p> Nome do usuário: " + usuario.nome + "</p>" +
            "<p> CPF: " + usuario.cpf + "</p>" +
            "<p> Cargo: " + usuario.cargo + "</p>" +
            "<p> Telefone: " + usuario.telefone + "</p>" +
            "<p> Email: " + usuario.email + "</p>" +
            "<button onclick=\"atualizarForm('" + usuario.cpf + "')\" class='edit'>Editar</button></a>"+
            "<button onclick=\"apagarUsuario('" + usuario.cpf + "')\"class='delete'>Deletar</button></a>"+
            "</div>";
            
        }
    });
}

function atualizarForm(cpf) {
    readByCpf(cpf,function (status, dados) {
        
        document.getElementById('formNomeUp').value = dados.nome;
        document.getElementById('formCpfUp').value = dados.cpf;
        document.getElementById('formCargoUp').value = dados.cargo;
        document.getElementById('formTelefoneUp').value = dados.telefone;
        document.getElementById('formEmailUp').value = dados.email;
        
        formul.formEmailUp.focus();
    });

}

function atualizarUsuario() {
    var usuario = {
        nome: document.getElementById('formNomeUp').value,
        cpf: document.getElementById('formCpfUp').value,
        cargo: document.getElementById('formCargoUp').value,
        telefone: document.getElementById('formTelefoneUp').value,
        email: document.getElementById('formEmailUp').value,
    }
    
    updateUsuario(usuario, function(status, dados) {
        
        document.getElementById('formNomeUp').value='';
        document.getElementById('formCpfUp').value='';
        document.getElementById('formCargoUp').value='';
        document.getElementById('formTelefoneUp').value='';
        document.getElementById('formEmailUp').value='';

        window.location.reload();

    });
}

function apagarUsuario(cpf) {
    if(confirm("Deseja apagar dados do usuário com o CPF " + cpf + "?")) {
        deleteUsuario(cpf, function(status, dados) {
            if(status < 200 || status > 299 ) {
                alert('Erro ao apagar usuário');
                return;
            }

            window.location.reload()
        });
    } else {
        confirm('Ação de Apagar foi cancelada');
    }
}

//
function redirect(){
    window.location.href = "usuarios.html";
}