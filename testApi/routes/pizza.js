const express = require('express');
const router = express.Router();
var pizzap = require('./PizzaModel'); //schema hace todo
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var url = 'mongodb://admin:password20@ds249575.mlab.com:49575/pizzas';
mongoose.connect(url);


router.get('/', function(req, res, next) {
    res.render('createPizza', { title: "JO's Pizza"});
});
router.get('/', function(req, res, next) {
    res.render('pizza', { title: "JO's Pizza", table: JSON.stringify(pizzasCreated) });
});
router.get('/addPizza', function(req, res, next){
    res.render('createPizza', { title: 'Crea tu propia pizza!'});
});

router.get('/thelist',function(req,err,res){
    if(err) 
        console.log("Error:  "+ err);
    else {
        console.log("Conexión a la BD realizada");
        pizzap.find({}).toArray(function(err,result){
            if(err){
                res.send(err);
            }
            else if (result.length){
                res.render('pizzalist',{pizzalist: result}); //un html que va a mostrar la lista de pizzas
            }
            else{
                res.send("No documents found");
            }
        })
        
    }

});
router.post("/addPizza", function(req,res,next){
    let newPizza = req.body;
    pizzap.insert(newPizza, function(err){
        if(err) {
            console.log("No fue posible conectarse",err);
            return;
        }else{
            res.status(200);
        }
    });    
    //res.redirect("thelist");

});

module.exports = router;