var pizzap = require('./PizzaModel');
$(document).ready(function(){
    $('#createPizza').click(function(){
        event.preventDefault();

        // Se crea el objeto que posteriomente se enviara al servidor
        
        var ingredients = [];

        // Obtiene el valor de todos los checkbox que fueron seleccionados
        //https://stackoverflow.com/questions/590018/getting-all-selected-checkboxes-in-an-array
        $('input[name=ingredients]:checked').each(function(){
            ingredients.push($(this).val());
        });
        var pizza = new pizzap({
            name: $('#pizzaName').val(),
            description: $('#pizzaDescription').val(),
            ingredients : ingredients.toString(),
            doughType : $('input:radio[name=doughType]:checked').val(),
            size : $('input:radio[name=pizzaSize]:checked').val(),
            slices: $('#numberOfSlices').val(),
            extraCheese :$('input:radio[name=extraCheese]:checked').val()
        });
        sendInfoToServer('pizza/addPizza','post',pizza);
    });
});
//https://teamtreehouse.com/community/using-ajax-post-to-send-data-to-nodejs-server
//https://stackoverflow.com/questions/8517071/send-json-data-via-post-ajax-and-receive-json-response-from-controller-mvc
function sendInfoToServer(routeInServer, typeOfRequest, data){
    $.ajax({
        url: 'http://localhost:3000/' + routeInServer,
        type: typeOfRequest,
        dataType: 'json',
        data: data       
    });
}