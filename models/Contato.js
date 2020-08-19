const Sequelize = require('sequelize');
const connection = require('../Database/database');

//criando a tabela 
const Contato = connection.define('FaleConosco', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
        
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    mensagem:{
        type: Sequelize.TEXT,
        allowNull: false,
        notNull: true
    }
   
});
module.exports = Contato;

/*passando a tabela para o banco 
Contato.sync({force: false}).then(() => {
    console.log("Tabela criada!")
}); */