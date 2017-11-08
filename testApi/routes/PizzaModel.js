var mongoose = require("mongoose");
var schema = mongoose.Schema;

var pizza = new schema({
    name: String,
    description : String,
    ingredients : [],
    doughType: String,
    size: String,
    slices : Number,
    extraCheese: String

});
module.exports = mongoose.model("PizzaModel", pizza); //retorno el nombre con el que lo voy a llamar y el esquema