const seguranca = require('../../model/components/seguranca');
const userBD = require('../../model/repositories/userBD');
module.exports = function(app){

app.get("/cadastro", function(req, res){
    if(req.query.fail)
        res.render('usuario/CadastroUsuario', { mensagem: 'Cadastro' });
    else
        res.render('usuario/CadastroUsuario', { mensagem: '' });
})

app.post('/cadastro/usuario/salvar', seguranca.autenticar, (req,res) => {
    try {
        userBD.Usuariodb.create({
            nome: req.body.nome,
            senha: seguranca.ocultarSenha(req.body.senha)
        })
        res.render('usuario/Sucesso', {mensagem: 'cadastrado'});
    } catch (error) {
        console.log(error);
        res.render('usuario/CadastroUsuario', { title: 'Cadastro',
            mensagem: 'Erro no cadastro'});
    }
});

app.get('/lista/usuario', seguranca.autenticar, async(req, res, next) => {
    try {
        const docs = await userBD.Usuariodb.findAll();
        res.render('usuario/Lista', { mensagem: 'Lista de Usuários', docs});
    } catch (err){
        next(err);
    }
});

app.get('/delete/usuario/:id', seguranca.autenticar, async(req, res, next) => {
    try {
        const userDelete = await userBD.Usuariodb.findByPk(req.params.id);
        await userDelete.destroy();
        const docs = await userBD.Usuariodb.findAll();
        res.render('usuario/Lista', { mensagem: 'Usuário excluído com sucesso', docs});
    } catch (err) {
        next(err);
    }
});

app.get('/edit/usuario/:id', seguranca.autenticar, async (req, res, next) =>{
    try {
        var id = req.params.id;
        const usuario = await userBD.Usuariodb.findByPk(id);
        res.render('usuario/EditUsuario', { mensagem: '', usuario});
    } catch (err) {
        next(err);
    }
});

app.post('/cadastro/usuario/edit/salvar', async (req, res, next) => {    
    try {
        const newUser = await userBD.Usuariodb.findByPk(req.body.id);
        newUser.nome = req.body.nome;
        await newUser.save();
        res.render('usuario/Sucesso', { mensagem: 'alterado' });
    } catch (error) {
        res.render('usuario/EditUsuario', { title: 'Edição Cadastro', mensagem: 'Erro no cadastro' });
    }
});

app.get('/login', function(req, res){
    if (req.query.fail) {
        res.render('usuario/Login', {mensagemLogin: 'Usuario e/ou senha incorretos!'});
    } else {
      res.render('usuario/Login', { mensagemLogin: null}); 
    }
});

}