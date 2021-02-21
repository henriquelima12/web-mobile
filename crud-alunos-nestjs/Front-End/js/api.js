const BASE_URL = "http://localhost:3000";

function logMessage(method, statusCode, data) {
    if (statusCode < 200 || statusCode > 299) {
        console.error("[" + method + "] retornou código " + statusCode, data);
    } else {
        console.log("[" + method + "] retornou código " + statusCode);
    }
}

function createAluno(aluno, callback) {
    var url = BASE_URL + '/alunos';
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(aluno);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('createAluno', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function readAll(callback) {
    var url = BASE_URL + '/alunos';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readAll', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function readByTia(tia,callback) {
    var url = BASE_URL + '/alunos/' + tia;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readByTia', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function updateAluno(aluno, callback) {
    var url = BASE_URL + '/alunos/' + aluno.tia;
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(aluno);
    
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('updateAluno', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}


function deleteAluno(tia, callback) {
    var url = BASE_URL + '/alunos/' + tia;
    var xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url, true);
    
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('deleteAluno', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}



