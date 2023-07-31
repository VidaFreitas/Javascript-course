let novoElemento = document.createElement("p");
let texto = document.createTextNode("texto com lista");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-prinicpal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);