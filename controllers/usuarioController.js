const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const bcrypt = require("bcryptjs");
const ejs = require('ejs');
const { msg } = require('body-parser');
const flash = require('express-flash');

router.get("/admin/usuarios", (req, res)=> {
    Usuario.findAll().then(usuarios => {
        res.render('admin/usuarios/usuarios', {usuarios:usuarios});

    });  
});

/*página para adicionar usuários*/
router.get('/admin/usuarios/new', (req, res) => {
    res.render('admin/usuarios/new');
});

/*página para cadastrar usuários no banco */
router.post('/usuarios/salvar', (req, res) => {
    var erros = [];
    //var {nome, email, dataNascimento, senha, senha2} = req.body;
     
    var nome = req.body.nomeUsuario;
    var email = req.body.emailUsuario;
    var dataNascimento = req.body.dataNascimentoUsuario;
    var senha = req.body.senhaUsuario;
    var senha2 = req.body.senha2Usuario;

    /*Início da Validação do campos*/
    if(!nome || typeof nome == undefined || nome == null){
        erros.push({msg: 'Nome inválido'});
    }
    if(!email || typeof email == undefined || email == null){
        erros.push({msg: 'E-mail inválido'});
    }
    if(!dataNascimento || typeof dataNascimento == undefined || dataNascimento == null){
        erros.push({msg: 'Data de Nascimento inválida'});
    }

    if(!senha || typeof senha == undefined || senha == null){
        erros.push({msg: 'Senha inválida'});
    }

    if(senha != senha2){
        erros.push({msg: 'As senhas são diferentes'})
    }
    /* Fim de validação dos campos do formulario */

    if(erros.length > 0){
        res.render('admin/usuarios/new', {erros, nome, email, dataNascimento, senha, senha2});
    }
    
    //Evitar duplicidade de e-mails
        Usuario.findOne({ where: {email: email}}).then(usuario => {

            if(usuario == undefined){
    
                //gerando Hash da senha p/ salvar no banco
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(senha, salt);
                    
                Usuario.create({
                nome: nome, //a variavel nome recebe os dados e salva no campo nome (que tá no model USUARIO)
                email: email,
                dataNascimento: dataNascimento,
                senha: hash
    
                }).then(() => {
                    //req.flash('msg_sucesso', 'Usuário criado com sucesso!');
                    res.redirect('/admin/usuarios');
                    
                }).catch(()=> {
                    res.redirect('/admin/usuarios/new');
                    
                });
            }
        });
});

/*página para listar usuários do sistema 
router.get('/admin/usuarios', (req, res) => {
    //se o user não tiver logado, será redirecionado p/ home page
    if(req.session.usuario == undefined){
        res.redirect('/');
    }
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

/*Formulário de login 
router.get('/',(req, res) => {
    res.render('index');

});*/
/*
router.post('/autenticacao', (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.findOne({where: {email: email}}).then(usuario => {
        if(usuario != undefined){
            //validar a senha
            var correct = bcrypt.compareSync(senha, usuario.senha);

            if(correct){
                req.session.usuario = {
                    id: usuario.id,
                    email: usuario.email
                }
                res.render('admin/painelAdmin');
            }else{
                res.redirect('/');
            }

        }else{
            res.redirect('/');
        }
    });

}); */

/*logout 
router.get('/logout', (req, res) => {
    req.session.usuario = undefined;
    res.redirect('/');

})*/

module.exports = router;