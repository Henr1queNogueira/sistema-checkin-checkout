const Sequelize = require('sequelize');
const connection = require('../Database/database');

//criando a tabela 
const Reservas = connection.define('reservas', {
    campo1:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
        
    },
    campo2:{
        type: Sequelize.STRING,
        allowNull: false,
        notNull: true
    },
    campo3:{
        type: Sequelize.TEXT,
        allowNull: false,
        notNull: true
    }
    //Precisamos definir quais campos irão ficar em reservas
   
});
module.exports = Reservas;

/*passando a tabela para o banco 
Contato.sync({force: false}).then(() => {
    console.log("Tabela criada!")
}); */