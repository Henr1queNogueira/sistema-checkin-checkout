const express = require('express');
const router = express.Router();


router.get("/quartos", function(req, res){
    res.render('quarto');
});

/*criar uma função que permita
ao admin adicionar fotos e mudar o titulo do campo */

module.exports = router;