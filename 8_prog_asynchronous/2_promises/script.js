let p = Promise.resolve(5);

console.log("Outros codigos");

console.log(p);

p.then((value) => {console.log(`O valor è ${value}`)});

