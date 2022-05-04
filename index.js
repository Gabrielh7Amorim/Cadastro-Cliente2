// (async()=>{
//     const db = require("./db");
//     console.log('SELECT * FROM USUARIO');
//     const usuarios = await db.selectUsuario();
//     console.log(usuarios);

//     //console.log('INSERT INTO USUARIO');
//     //const result = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
//     //console.log(result);

//     //console.log('DELETE FROM USUARIO');
//     //const result3 = await db.deleteUsuario(8);
//     //console.log(result3);

//     //console.log('UPDATE USUARIO');
//     //const result2 = await db.updateUsuario(3, {nome:"Zé José", senha: "hhjdhjjhsd7368"});
//     //console.log(result2);
    
// })();



(async () =>{
    const database = require('./dborm');
    const Cliente = require('./cliente');

    console.log(' Criar tabela ====================================================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);

    
    
    console.log(' Criar um registro ==============================================');
    const inserirCliente = await Cliente.Cliente.create({
        nome: 'João da Sila',
        idade: 10,
        endereco: 'Rua Paulista, n 10000'
    })
    console.log(inserirCliente);


    console.log(' buscar um registro ==============================================');
    const cliente = await Cliente.Cliente.findByPk(1);
    console.log(cliente);


    console.log(' alterar um registro ==============================================');
    const clienteAlterar = await Cliente.Cliente.findByPk(1);
    clienteAlterar.nome = "Gabriel Henrique"
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);


    console.log(' buscar todos os registro ==============================================');
    const clientes = await Cliente.Cliente.findAll();
    console.log(cliente);
})();
