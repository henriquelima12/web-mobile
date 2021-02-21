const BASE_URL = "http://localhost:3000";

function logMessage(method, statusCode, data) {
    if (statusCode < 200 || statusCode > 299) {
        console.error("[" + method + "] retornou código " + statusCode, data);
    } else {
        console.log("[" + method + "] retornou código " + statusCode);
    }
}

function createUsuario(usuario, callback) {
    var url = BASE_URL + '/usuarios';
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(usuario);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('createUsuario', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function readAll(callback) {
    var url = BASE_URL + '/usuarios';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readAll', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function readByCpf(cpf,callback) {
    var url = BASE_URL + '/usuarios/' + cpf;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readByCpf', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function updateUsuario(usuario, callback) {
    var url = BASE_URL + '/usuarios/' + usuario.cpf;
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(usuario);
    
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('updateUsuario', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function deleteUsuario(cpf, callback) {
    var url = BASE_URL + '/usuarios/' + cpf;
    var xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url, true);
    
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('deleteUsuario', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}