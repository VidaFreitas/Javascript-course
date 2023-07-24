const validateDates = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validateDates.test("05/02/2000"));
console.log(validateDates.test("5/2/2000"));
console.log(validateDates.test("05-02-2000"));
console.log(validateDates.test("05/02/00"));
console.log(validateDates.test("09/02/2001"));
console.log(validateDates.test("99/12/1999"));