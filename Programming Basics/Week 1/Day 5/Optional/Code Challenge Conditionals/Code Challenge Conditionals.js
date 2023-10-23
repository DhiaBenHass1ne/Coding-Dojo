function reward (Day,Time){
    var randomTreats1=["Ice Cream","Cookies","Candy"];
    var randomTreats2=["Hot Chocolate","Tea","Cake"];
    if ( Time < 10 && Time >=0 ) {
        return "Latte";
    }
    else if (Time >= 10 && Time < 16)
    {
        if (Time==15){
            let i = Math.floor(Math.random()*3)
            return randomTreats2[i];
        }
        else{
        return "Hot Chocolate";}
    }
    else if ( Time>=16 && Time < 22)
    {
        if (Time>=16 && Time <=18 ) {
            let j = Math.floor(Math.random()*3)
            if (Time%2!==0){
                return randomTreats2[j];
            }
            else {return randomTreats1[j];}
        }
        if (Day == "Wednesday"){
            return "Strawberry Ice Cream";
        }
        else {
        return "Vanilla Ice Cream";}
    }
    else if ( Time >= 22 && Time < 24 )
    {
        return "Go To Sleep!"
    }
    else if (Time > 23 || Time < 0)
    {
        return "Wrong Time"
    }

}
console.log( reward("heh",20) )
