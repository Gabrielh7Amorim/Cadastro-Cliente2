const LocalStrategy = require('passport-local').Strategy;
const seguranca = require("./seguranca");
const usuarioBanco = require("../repositories/usuarioBD")

module.exports = function(passport){
    passport.serializeUser((user, done) =>{
        done(null, user.id);
    });

    passport.deserializaeUser(async (id, done) => {
        try {
            const usuario = await usuarioBanco.getUsuarioId(id);
            done(null, usuario);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'nome',
        passportField: 'senha'
    },

    async (nome, senha, done) =>{
        try {
            const usuario = await usuarioBanco.login(nome, senha);
            if (usuario != null && usuario[0]){
                return done(null, usuario[0]);
            } else {
                return done(null, false);
            }
        } catch (err) {
            done(err, false);
        }
    }
    ));
}


