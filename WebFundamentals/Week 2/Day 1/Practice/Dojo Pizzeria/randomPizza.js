function randomPizza(){
    var crusts=["deep dish", "hand tossed","thin","garlic"];
    var sauces=["marinara","traditional","white","pesto","ranch"];
    var cheese=["mozzarella","ricotta","feta","cheddar"];
    var toppings=["pepperoni","sausage","tuna","mushroom","olives","onion","bacon","ground beef","chicken"];
    
    var pizza={};
        pizza.crust=crusts[Math.floor(Math.random()*(crusts.length))];
        pizza.sauce=sauces[Math.floor(Math.random()*(sauces.length))];
}