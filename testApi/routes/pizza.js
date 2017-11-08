var express = require('express');
var router = express.Router();


var pizzasCreated = [];

router.get('/', function(req, res, next) {
    res.render('pizza', { title: "JO's Pizza", table: JSON.stringify(pizzasCreated) });
});

router.get('/CreatePizza', function(req, res, next){
    res.render('create', { title: 'Crea tu propia pizza!'});
});

router.post('/CreatePizza', function(req, res, next){
    pizzasCreated.push(req.body);
    res.status(200);
    res.json({url: "http://localhost:3000/Pizza"});
});

router.delete('/DeletePizza', function(req, res, next){
    // Elimino la pizza deseada
    pizzasCreated.splice(pizzasCreated.indexOf(req.body), 1);
    res.json({url: "http://localhost:3000/Pizza"});
});


///REVISAR
router.post('/SearchPizza', function(req, res, next){
    
    let pizzaToSearch = pizzasCreated[indexOf(pizzasCreated, req.body.name)];
    let newPizzaArray = [];
    newPizzaArray[0] = pizzaToSearch;
    res.status(200);
    
    if (pizzaToSearch)
        res.json({mensaje:"La pizza si existe"});
    else
        res.json({mensaje:"La pizza no existe"});
    
    res.end();
});

/*router.post('/EditPizza', function(req, res, next)
{
    var x = req.query.name 
    var pizza = pizzas[x];
    res.render('updatePizza', { title: 'Pizza CRUD', name: 'Pizza CRUD', rows : JSON.stringify(pizza) });
 
});*/

function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.toString() === item.toString()) return i;
    }
    return -1;
}



module.exports = router;