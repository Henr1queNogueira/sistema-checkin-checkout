const express = require('express');
const router = express.Router();

router.get("/quemSomos", (req, res)=> {
    res.render('quemSomos');
});
module.exports = router;