const {createServer, request} = require(`http`);

let server = createServer((request, Response) => {

    Response.writeHead(200, {"Content-Type": "text/html"});
    Response.write(`
        <h1>Hello Wrold!</h1>
        <p>Primeira Página com Node.js</p>
    `);

    Response.end();

});

server.listen(8000);

console.log("Porta 8000");