const validateDomain = /\ww.\w+\.com.br|.com/;

console.log(validateDomain.test("www.google.com"));
console.log(validateDomain.test("www.horadecodar.com.br"));
console.log(validateDomain.test("ww.time"));
console.log(validateDomain.test("horadecordar.com.br"));