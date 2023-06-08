function soma(a, b) {

    if(a === undefined || b === undefined) {
        console.log("Teste de função");
    } else {
        return a + b;
    }
}

console.log(soma(1));

console.log(soma(1, 2));

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " voce tem " + idade + " anos ");
    }
}

saudacao("Vida");

saudacao("Bia", 29);