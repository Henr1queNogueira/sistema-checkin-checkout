const express = require('express');
const router = express.Router();
//const adminAuth = require('../middleware/adminAuth');

router.get("/admin/", function(req, res){
    res.render('admin/painelAdmin');
});

/*criar uma função que permita
ao admin adicionar fotos e mudar o titulo do campo */

module.exports = router;