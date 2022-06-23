const Usuario = require("./userBD");
const seguranca = require("../components/seguranca");

async function login(nome, senha){
    const rows = await Usuario.Usuariodb.findAll({
        where: {
            nome: nome,
            senha: seguranca.ocultarSenha(senha)
        }
    });
    if(rows.length > 0){
        return rows;
    } else{
        return null;
    }
}

module.exports = {login};