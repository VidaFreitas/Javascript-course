let pessoa = {
    "nome": "Vida",
    "idade": 27,
    "profissão": "Product Manager",
    "Hobbies": ["Ouvir musica", "Ver series"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.Hobbies[0]);