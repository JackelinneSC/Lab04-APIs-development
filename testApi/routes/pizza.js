var express = require('express');
var router = express.Router();


var pizzasCreated = [];

router.get('/', function(req, res, next) {
    res.render('pizza', { title: "JO's Pizza" });
});

router.get('/CreatePizza', function(req, res, next){
    res.render('create', { title: 'Crea tu propia pizza!'});
});

router.post('/CreatePizza', function(req, res, next){
    pizzasCreated.push(req.body);
    console.log(pizzasCreated);
    // Se le asigna el status para dar a entender que se ha creado una pizza
    res.status(201); 
});

module.exports = router;