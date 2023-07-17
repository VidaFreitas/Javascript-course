function checkNumber(num) {
    let numero = Number(num);
    if(Number.isNaN(numero)) {
        alert("Please, put only numbers");
    } else {
        return numero;
    }
}

checkNumber(5);
checkNumber('sadh');

let nummero = prompt("Enter a number");

checkNumber(numero);