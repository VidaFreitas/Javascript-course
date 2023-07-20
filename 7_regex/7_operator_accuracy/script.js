const cep = /\d{5}-\d{3}/;

console.log(cep.test("881177-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("9999-999"));
