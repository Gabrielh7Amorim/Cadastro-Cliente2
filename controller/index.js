const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem-Vindo ao meu app");
})

app.get("/contato", function(req, resp){
    resp.send("Pagina de contato do meu app");
})

app.get("/produto", function(req, resp){
    resp.send("Pagina de produto do meu app");
})

app.get("/dados/:nome/:cargo", function(req, resp){
    resp.send("<h1>Ola sr(a). "+req.params.nome+"</h1><h2>Seu cargo é "+req.params.cargo+"</h2>");
})

// esta sempre deve ser a última linha quando usamos o express
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});