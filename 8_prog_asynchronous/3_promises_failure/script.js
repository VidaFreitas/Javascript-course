let p = Promise.resolve(new Error("failure"));

console.log("Hello");

p.then(value => console.log(value))
    .catch(reason => console.log("Failure: " + reason));

