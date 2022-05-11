const express = require("express");
const app = express();


app.engine('html', require('ejs').renderFile);
 //npm install ejs
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view/ '));
// npm install body-parser
    //utilitario que serve para receber dados de qualquer formulario dentro do express
    bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    //npm i passport express-session
    const passport = require('passport');
    const session = require('express-session');
    require('./model/components/autenticacao')(passport);
        //config
        app.use(session({
            secret: '12345678', //configure um segredo seu aqui,
            resave: false, // salvar a cada requisição
            saveUninitialized: false, // sessões anônimas
            cookie: {maxAge: 30 * 60 * 1000} // 30min
        }))
// npm install consign
    var consign = require('consign');
    consign().include('controller/routes', ).into(app);
    app.listen(8081, function(){
    console.info("Servidor funcionando!");
    })  

    app.post('/login/executar', passport.authenticate('local', {
        successRedirect: '/lista/usuario',
        failureRedirect: '/lista/?fail=true'
    }));
    
