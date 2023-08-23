let express = require(`express`);
let app = express();

app.get(`/`, function(req, res) {
    res.send(`Primeira rota com express`);
});

app.listen(3000, function() {
    console.log("A aplicação està funcinando na porta 3000")
});