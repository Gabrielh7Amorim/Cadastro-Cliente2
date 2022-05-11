// npm install sha1 -- Api
function ocultarSenha(senha) {
    var sha1 = require('sha1');
    console.log(senha);
    var hash = sha1(senha);
    console.log(hash);
    return hash;
}

function autenticar(rq, res, next) {
    if(require.isAuthenticated()) return next();
    res.redirect('/login?fail=true');
}
module.exports = {ocultarSenha, autenticar};