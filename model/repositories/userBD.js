const Sequelize = require('sequelize');
const database = require('./dborm');


const Usuariodb = database.sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {Usuariodb};
// Usuariodb.sync({force: true});