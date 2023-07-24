const validateEmail = /\w+@\w+\.\w+/;

console.log(validateEmail.test("vida@gmail.com"));
console.log(validateEmail.test("vida#gmail"));
console.log(validateEmail.test("gmail.com"));
console.log(validateEmail.test("vida@gmail.com.br"));