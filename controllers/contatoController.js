const express = require('express');
const router = express.Router();
//const faleConoscoModel = require('/controllers/Database/Contato'); //importando o model para o index, com isso, o node irá executar

router.get("/contato", (req, res) => {
    res.render('contato');
});

module.exports = router;


/*Rota para exibir as mensagens enviadas pelo fale conosco 
router.get("/mensagens", (req, res) => {
    faleConoscoModel.findAll({ raw: true, order:[
        ['id','DESC'] //ASC - CRESCENTE || DESC - DECRESCENTE
    ]}).then(mensagens => {
        //exibir a mensagens para o adm do site
        res.render('mensagens', {
            mensagens: mensagens
        });
    });
});

//Rota para receber os dados do formulário
router.post('/salvarMsgContato', (req, res)=> {
    var nome = req.body.nome;
    var email = req.body.email;
    var mensagem = req.body.mensagem;

    // É equivalente ao INSERT
    faleConoscoModel.create({
        nome: nome,
        email: email,
        mensagem: mensagem
    }).then(() => {
        //apos salvar os dados no banco, o usuário é redirecionado a pagina principal
        res.redirect('/');
    });   
});
*/

