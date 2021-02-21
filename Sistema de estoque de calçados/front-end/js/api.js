const BASE_URL = "http://localhost:3000";

function logMessage(method, statusCode, data) {
    if (statusCode < 200 || statusCode > 299) {
        console.error("[" + method + "] retornou código " + statusCode, data);
    } else {
        console.log("[" + method + "] retornou código " + statusCode);
    }
}

function createProduto(produto, callback) {
    var url = BASE_URL + '/produtos';
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(produto);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('createProduto', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function readAll(callback) {
    var url = BASE_URL + '/produtos';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readAll', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function readByCodigo(codigoProduto,callback) {
    var url = BASE_URL + '/produtos/' + codigoProduto;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('readByCodigo', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function updateProduto(produto, callback) {
    var url = BASE_URL + '/produtos/' + produto.codigoProduto;
    var xhr = new XMLHttpRequest();
    
    dados = JSON.stringify(produto);
    
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('updateProduto', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function deleteProduto(codigoProduto, callback) {
    var url = BASE_URL + '/produtos/' + codigoProduto;
    var xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url, true);
    
    xhr.responseType = 'json';
    xhr.onload = function () {
        logMessage('deleteProduto', xhr.status, xhr.response);
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

