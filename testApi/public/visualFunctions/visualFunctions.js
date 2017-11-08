function showPizzas(json)
{
    var pizzas = JSON.parse(json);
    
    var table = document.getElementById("pizzas")./*Esto se hace para no escribir en el encabezado*/getElementsByTagName("tbody")[0];
    
    

    for(var pizza in pizzas)
    {
        //https://stackoverflow.com/questions/15315315/how-do-i-add-a-button-to-a-td-using-js
        var editBtn = document.createElement('button');
        editBtn.innerText = "Editar";
        editBtn.name = "editPizza";
        editBtn.id = "editPizza";
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Eliminar";
        deleteBtn.name = "deletePizza";
        deleteBtn.id = "deletePizza";

        var row = table.insertRow(0);
        var pizzaName =  row.insertCell(0);
        var pizzaDescription =  row.insertCell(1);
        var ingredients =  row.insertCell(2);
        var doughType=  row.insertCell(3);
        var pizzaSize =  row.insertCell(4);
        var slices =  row.insertCell(5);
        var extraCheese =row.insertCell(6);
        var options = row.insertCell(7);
         
        pizzaName.innerHTML = "<td id='pizzaName'>" + pizzas[pizza].name + "</td>";
        pizzaDescription.innerHTML = pizzas[pizza].description;
        var ingredientsOfPizza = pizzas[pizza].ingredients.split(",");
        for (i = 0; i < ingredientsOfPizza.length; i++)
            ingredients.innerHTML += pizzas[pizza].ingredients.split(",")[i] + " ";     
        doughType.innerHTML = pizzas[pizza].doughType;
        pizzaSize.innerHTML = pizzas[pizza].size;
        slices.innerHTML = pizzas[pizza].slices;
        extraCheese.innerHTML = pizzas[pizza].extraCheese;  
        options.appendChild(editBtn);
        options.appendChild(deleteBtn);   
    }
}

