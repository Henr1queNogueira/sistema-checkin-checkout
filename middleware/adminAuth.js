function adminAuth(req, res, next){
    if(req.session.usuario != undefined){
        next();
    }else{
        res.redirect('/');
    }

};

//para usar o middleware nas rotas, basta fazer conforme o exemplo do 
//painel admin

module.exports = adminAuth