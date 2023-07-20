const notab  = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(notab.test("123 as"));
console.log(notab.test("haudiaudiueuhsdhua"));


