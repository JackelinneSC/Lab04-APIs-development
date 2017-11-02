var express = require('express');
var router = express.Router();


var pizzasCreated = {};

router.get('/', function(req, res, next) {
    res.render('pizza', { title: "JO's Pizza" });
});

router.get('/CreatePizza', function(req, res, next){
    res.render('create', { title: 'Crea tu propia pizza!'});
});

router.post('/CreatePizza', function(req, res, next){
    // No puedo obtener esta info
    let hola = req.body;
});

module.exports = router;