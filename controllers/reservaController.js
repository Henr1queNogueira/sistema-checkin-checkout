const express = require('express');
const router = express.Router();

router.get("/reservas", (req, res)=> {
    res.render('reserva');
});

/*Rota para receber os dados do formulário*/
router.post('/salvarReservas', (req, res)=> {

    res.send('Solicitação enviada!');
});

module.exports = router;
