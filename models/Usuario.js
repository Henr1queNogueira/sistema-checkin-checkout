const Sequelize = require('sequelize');
const connection = require('../Database/database');

//criando a tabela 
const Usuario = connection.define('usuarios', {
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
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    }
   
});
module.exports = Usuario;

/*passando a tabela para o banco 
Usuario.sync({force: false}).then(() => {
    console.log("Tabela criada!")
}); */