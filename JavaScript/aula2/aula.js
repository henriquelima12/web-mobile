window.onload = function(){
    getJSON("https://api.covid19api.com/dayone/country/brazil", showData);
}

function showData(data){
    var str = "<h1>COVID19</h1>";
    
    for (var i=0; i<data.length; i++){
        str += "<article>";
        str += "<h2>" + data[i].Country + " - " + data[i].Date.split("T")[0] + "</h2><hr>";
        str += "<p>Confirmados: " + data[i].Confirmed + "</p>";
        str += "<p>Ativos: " + data[i].Active + "</p>";
        str += "<p>Recuperados: " + data[i].Recovered + "</p>";
        str += "<p>Deaths: " + data[i].Deaths + "</p>";
        str += "</article>";
    }
    
    document.body.innerHTML += str;
}

function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function(){
        if (xhr.status === 200){
            console.log("Dados recebidos com sucesso!");
            callback(xhr.response);
        } else {
            console.warn("Problemas ao conectar com o servidor: " + xhr.status);
        }
    }
    xhr.send();
}
