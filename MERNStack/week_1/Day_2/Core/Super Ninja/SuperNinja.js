class Ninja {
    constructor(name, health=90, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name:${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength=${this.strength}`);
    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name,wisdom=10){
        super(name,200,10,10)
        this.wisdom=wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Dhia",100,3,50);
// ninja1.sayName()
// ninja1.drinkSake()
// ninja1.showStats()

const sensei1 = new Sensei ("Sefi");
sensei1.speakWisdom()
sensei1.showStats()
