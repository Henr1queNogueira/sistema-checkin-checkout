const express = require('express');
const router = express.Router();

/*Tela pública - reservas */
router.get("/reservas", (req, res)=> {
    res.render('reserva');
});


/*Tela Admin- Reservas */
router.get("/admin/reservas", (req, res)=> {
    res.render('admin/reservas/reservas')
})


module.exports = router;
