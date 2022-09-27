const frutas = ["laranja", "limão", "uva"];

for(let i in frutas){
    document.getElementById(`fruta-${Number(i) + 1}`).innerHTML = frutas[i]
}

function addFruta() {
    let lista = document.getElementById("lista-de-frutas").innerHTML.trim()
    console.log(lista)

    if(lista.endsWith("></li>")) {
        document.getElementById("lista-de-frutas").innerHTML = lista.substring(0, lista.lastIndexOf("</li>")) + document.getElementById("fruta").value + "</li>"
    } else {
        document.getElementById("lista-de-frutas").innerHTML += `<li id="fruta-${document.getElementsByTagName("li").length}">` + document.getElementById("fruta").value + "</li>"
    }
}