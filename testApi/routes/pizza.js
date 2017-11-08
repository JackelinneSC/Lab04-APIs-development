const express = require('express');
const router = express.Router();
var pizzap = require('./PizzaModel'); //schema hace todo
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
m

var url = 'mongodb://admin:password20@ds249575.mlab.com:49575/pizzas';
mongoose.connect(url);


router.get('/', function(req, res, next) {
    res.render('createPizza', { title: "JO's Pizza"});
});

router.get('/addPizza', function(req, res, next){
    res.render('createPizza', { title: 'Crea tu propia pizza!'});
});

router.get('/thelist',function(req,res){
    mongoose.connect(url, function(err, db){
        if(err) 
          console.log("Error:  "+ err);
        else {
            console.log("Conexión a la BD realizada");
            pizzap.find({}).toArray(function(err,result){
                if(err){
                    res.send(err);
                }
                else if (result.length){
                    res.render('pizzaCRUD'); //un html que va a mostrar la lista de pizzas
                }
            })
            
        }
          
      });
});
router.post("/addPizza", function(req,res,next){
    let newPizza = req.body;
    mongoose.connect(url, function(err, db) {
        
        if(err) {
            console.log("No fue posible conectarse",err);
            return;
        }
        console.log("Connected correctly to server");
        const pizzas = db.collection('Pizzatime');
        
        pizzas.insert([newPizza], function(error,result){
            if(error)console.log(error);
            else {
                res.redirect("thelist"); 
                res.status(201); 
                res.statusMessage = "Pizza creada";
            }             
                
        });
        db.close(function (err) {
            if(err) throw err;
          });

        
    });

    

});


module.exports = router;