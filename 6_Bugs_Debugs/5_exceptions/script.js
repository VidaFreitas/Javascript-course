function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parametro nome precisa ser string");
    } else {
        console.log("Ola");
    }
}

saudacao("");
saudacao(5);

console.log("teste");