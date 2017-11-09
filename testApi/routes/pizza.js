const express = require('express');
const router = express.Router();
var pizzap = require('./PizzaModel'); //schema hace todo
const mongoose = require('mongoose');
var url = 'mongodb://admin:password20@ds249575.mlab.com:49575/pizzas';
mongoose.connect(url);
let actualPizzas = [];


router.get('/', function(req, res, next) {
    res.render('createPizza', { title: "JO's Pizza"});
});

router.get('/addPizza', function(req, res, next){
    res.render('createPizza', { title: 'Crea tu propia pizza!'});
});
router.post("/addPizza", function(req,res,next){
    let newPizza = req.body;
    console.log("FORMATO PIZA: ", newPizza);
    pizzap.insertMany(newPizza, function(err, result){
        if(err) {
            console.log("No fue posible conectarse",err);
            return;
        }else{
            console.log("se insertó el elemento a la base",newPizza);
            res.status(200);
            res.redirect('thelist');
           
        }
    });    
    
});
router.get('/thelist',function(req,res){
    pizzap.find({}, function(err, pizzatolist){
        if (err) throw err;
        console.log("esto es lo que retorna: " ,pizzatolist);
        actualPizzas = pizzatolist;
        res.render("pizzalist", {title : "Tabla de pizzas ordenas", pizzalist : pizzatolist});
    });
   
});

router.delete('/:idPizza', function(req,res,next){
    let currentPizza = actualPizzas[req.params.idPizza];
});

module.exports = router;