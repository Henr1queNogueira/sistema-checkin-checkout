const Sequelize = require('sequelize');

/* para fazer a conexão, vc precisa informar os seguintes parâmetros: Nome-Banco, usuário-root e senha */
const connection = new Sequelize('sistemaCheckinCheckout', 'root', 'henri201',{
    //servidor onde está rodando 
    host: 'localhost',
    //tipo de banco
    dialect: 'mysql',

    /*serve para salvar os dados com fuso horário de pvh
     timezone: '-04:00' -> tirei pq todas as datas inseridas no formulario iam erradas para o banco
    com -4h de diferença
    */
   

});

module.exports = connection;
