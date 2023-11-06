function randomPizza(){
    var crusts=["deep dish", "hand tossed","thin","garlic"];
    var sauces=["marinara","traditional","white","pesto","ranch"];
    var cheese=["mozzarella","ricotta","feta","cheddar"];
    var toppings=["pepperoni","sausage","tuna","mushroom","olives","onion","bacon","ground beef","chicken"];
    
    var pizza={};
        pizza.crust=crusts[Math.floor(Math.random()*(crusts.length))];
        pizza.sauce=sauces[Math.floor(Math.random()*(sauces.length))];
        pizza.cheese=cheese[Math.floor(Math.random()*(cheese.length))];
        pizza.toppings=toppings[Math.floor(Math.random()*(toppings.length))];

    console.log(pizza);
}

randomPizza();