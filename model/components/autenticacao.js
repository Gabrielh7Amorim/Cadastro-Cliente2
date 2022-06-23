const LocalStrategy = require('passport-local').Strategy;
const usuarioBanco = require("../repositories/userBD");
const loginBd = require("../repositories/login");

module.exports = function(passport){
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) =>{
        try {
            const usuario = await usuarioBanco.Usuariodb.findByPk(id);
            done(null, usuario);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy({
            usernameField: 'nome',
            passwordField: 'senha'
            },

        async (nome, senha, done) => {
            try {
                const usuario = await loginBd.login(nome, senha);
                if(usuario != null && usuario[0]){
                    return done(null, usuario[0]);
                } else {
                    
                    return done (null, false);
                }
            } catch (err) {
                done(err, false)
            }
        }
    ));
    
};






