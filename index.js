const express = require('express'); //carregando/importando o express no projeto
const app = express(); //iniciando e passando o express para a constante app.
const bodyParser = require('body-parser'); //Responsável por capturar dados do formulário
const connection = require('./Database/database'); //Conexão com o banco

/*importando as controllers */
const contatoController = require('./controllers/contatoController');
const quartoController = require('./controllers/quartoController');
const reservaController = require('./controllers/reservaController');
const usuarioController = require('./controllers/usuarioController');
const painelAdminController = require('./controllers/painelAdminController')

app.set('view engine', 'ejs'); //Informando ao express que o EJS é View engine
app.use(express.static('public'));//informando a aplicação que quero usar arquivos estáticos (css, js, img)
app.use(bodyParser.urlencoded({extended: false})); //BodyParser decodificado os dados enviados pelo formulario
app.use(bodyParser.json()); //Comando que permite ler dados de formulario enviados via json


/*DATABASE */
connection.authenticate().then(() => {
    console.log('Conexão feita com o Banco de Dados')}).catch((msgErro) => {
        console.log(msgErro + 'DEU RUIM :( ');
});

/*Rotas exportadas da pasta controllers*/
app.use('/', contatoController);
app.use('/', quartoController);
app.use('/', reservaController);
app.use('/', usuarioController);
app.use('/', painelAdminController)

/*  ------ROTAS----- */
app.get("/", (req, res) => {
    res.render('index');
});



/*SERVIDOR */
app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro!');
    }else{
        console.log('Servidor Iniciado!')
    }
});