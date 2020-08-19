const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');


/*página para adicionar usuários*/
router.get('/admin/usuarios/new', (req, res) => {
    res.render('admin/usuarios/new');
});

/*página para cadastrar usuários no banco */
router.post('/usuarios/salvar', (req, res) => {
    var nome = req.body.nomeUsuario;
    var email = req.body.emailUsuario;
    var dataNascimento = req.body.dataNascimentoUsuario;

    if(nome != undefined){
        Usuario.create({
            nome: nome, //a variavel nome recebe os dados e salva no campo nome (que tá no model USUARIO)
            email: email,
            dataNascimento: dataNascimento
        }).then(() => {
            res.redirect('/admin/usuarios');
        });

    }else{
        res.redirect('/admin/usuarios/new');      
    }

});

/*página para listar usuários do sistema */
router.get('/admin/usuarios', (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.render('admin/usuarios/usuarios', {usuarios:usuarios});

    });  
});

/*Rota para deletar usuários */
router.post('/usuarios/delete', (req, res) => {
    var id = req.body.id;

    //verficando se o id é válido, diferente de nulo
     //verficar se o valor é número ou não. 
    if(id != undefined || !isNaN(id)){
        Usuario.destroy({
            where: {
                id:id
            }
        }).then(() =>{
            res.redirect('/admin/usuarios');
        })

    }else{
        res.redirect('/admin/usuarios');
    }
});

/*Rota de editar */
router.get('/admin/usuarios/editar/:id', (req, res) => {
    var id = req.params.id;
    //var moment=require('moment');
    //verificar se o id é um numero
    if(isNaN(id)){
        res.redirect('/admin/usuarios');
    }
    Usuario.findByPk(id).then(usuario => {
        if(usuario != undefined){
            res.render('admin/usuarios/editar', {usuario: usuario});
        }else {
            res.redirect('/admin/usuarios');
        }
    }).catch(erro => {
        res.send(erro);
        //res.redirect('/admin/usuarios');
    });

});

/* Rota para salvar a edição*/

router.post('/admin/usuarios/atualizar', (req, res) => {
    var id = req.body.id;
    var nome = req.body.nomeUsuario;
    var email = req.body.emailUsuario;
    var dataNascimento = req.body.dataNascimentoUsuario;

    Usuario.update({nome: nome, email: email, dataNascimento: dataNascimento}, {
        where: {
            id: Number(id)
            
        }
    }).then(() => {
        res.redirect('/admin/usuarios');
    }).catch(err => {
        res.send('deu ruim: '+err)
    });
    
});  

module.exports = router;