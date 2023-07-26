function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num ==2) {
            resolve(console.log(`O numero é ${num}`));
        } else {
            reject(new Error("Failure"));
        }
    });

}

verificarNumero(2);
verificarNumero(3);
