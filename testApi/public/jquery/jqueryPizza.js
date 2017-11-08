var pizzap = require('./PizzaModel');
$(document).ready(function(){
    $('#createPizza').click(function(){
        event.preventDefault();

        // Se crea el objeto que posteriomente se enviara al servidor
        var pizza = {};
        var ingredients = [];

        // Obtiene el valor de todos los checkbox que fueron seleccionados
        //https://stackoverflow.com/questions/590018/getting-all-selected-checkboxes-in-an-array
        $('input[name=ingredients]:checked').each(function(){
            ingredients.push($(this).val());
        });
        
        pizza = {
            "name": $('#pizzaName').val(),
            "description": $('#pizzaDescription').val(),
            "ingredients": ingredients.toString(), // Le doy to string porque asi sera mas facil en la vista porque solo aplico split por comas
            "doughType": $('input:radio[name=doughType]:checked').val(),
            "size": $('input:radio[name=pizzaSize]:checked').val(),
            "slices": $('#numberOfSlices').val(),
            "extraCheese": $('input:radio[name=extraCheese]:checked').val()
         }
        sendInfoToServer('pizza/addPizza','post',pizza, function(data){
            window.location.href = data.url;
        });
    });
});
//https://teamtreehouse.com/community/using-ajax-post-to-send-data-to-nodejs-server
//https://stackoverflow.com/questions/8517071/send-json-data-via-post-ajax-and-receive-json-response-from-controller-mvc
function sendInfoToServer(routeInServer, typeOfRequest, data){
    $.ajax({
        url: 'http://localhost:3000/' + routeInServer,
        type: typeOfRequest,
        dataType: 'json',
        data: data,
        success: successFunction      
    });
}