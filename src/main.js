//add a class called desserts and pass two properties called type and calories

class Desserts{
    constructor (type, calories){
        this.type = type;
        this.calories = calories;
    }
    
}

class Icecream extends Desserts{
    constructor (flavor, scoops){
        this.flavor = flavor;
        this.calories = calories;
    }
}

includeSpoon(){
    console.log("Here is your spoon!");
}

const Icecream = new Icecream ("icecream", 340, "vanilla");
console.log (Icecream);