const { application } = require('express');
const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/usuarioBD');

module.exports = function(app){

app.get("/cadastro", function(req, res){
    if(req.query.fail)
        res.render('../../view/usuario/CadastroUsuario', { mensagem: 'Cadastro' });
    else
        res.render('../../view/usuario/CadastroUsuario', { mensagem: null });
})

// teste pessoal - cadastrar
app.post('/cadastro/usuario/salvar', function(req, res){
(async()=>{
    console.log('INSERT INTO USUARIO');
    const result = await usuarioBanco.insertUsuario({nome: req.body.nome, senha: req.body.senha});
    console.log(result);
})().then(function(){
    res.send("Post criado com sucesso!")
}).catch(function(erro){
    res.send("Houve um erro: " + erro)
});
})


app.post('/cadastro/usuario/edit/salvar', (req, res) => {
    var usuario = { 
        nome: req.body.nome,
        senha: req.body.senha,
        id: req.body.id};
    try {
        usuarioBanco.updateUsuario(usuario);
        res.render('usuario/Sucesso', { mensagem: 'alterado' });
    } catch (error) {
        res.render('usuario/EditUsuario', { title: 'Edição Cadastro', mensagem: 'Erro no cadastro' });
    }
});
}