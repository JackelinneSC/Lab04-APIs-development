function showPizzas(json)
{
    var pizzas = JSON.parse(json);
    var table = document.getElementById("pizzas").getElementsByTagName("tbody")[0];

    table.innerHTML = "";

    for(var pizza in pizzas)
    {
        var row = table.insertRow(0);
        var pizzaName =  row.insertCell(0);
        var pizzaDescription =  row.insertCell(1);
        var ingredients =  row.insertCell(2);
        var doughType=  row.insertCell(3);
        var pizzaSize =  row.insertCell(4);
        var slices =  row.insertCell(5);
        var extraCheese =row.insertCell(6);
        
        pizzaName.innerHTML = pizzas[pizza].name;
        pizzaDescription.innerHTML = pizzas[pizza].description;

        var ingredientsOfPizza = pizzas[pizza].ingredients.split(",");
        for (i = 0; i < ingredientsOfPizza.length; i++)
            ingredients.innerHTML += pizzas[pizza].ingredients.split(",")[i] + " ";     
        doughType.innerHTML = pizzas[pizza].doughType;
        pizzaSize.innerHTML = pizzas[pizza].size;
        slices.innerHTML = pizzas[pizza].slices;
        extraCheese.innerHTML = pizzas[pizza].extraCheese;     
    }
}