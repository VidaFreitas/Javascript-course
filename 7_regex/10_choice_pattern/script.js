const reg = /\w+: (Vida|Lara|Maria)/;

console.log(reg.test("Nome: Vida"));
console.log(reg.test("Nome: Luana"));
console.log(reg.test("Nome: Lara"));