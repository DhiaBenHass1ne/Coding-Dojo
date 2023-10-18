function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    var leftover=numberOfPieces-numberOfPeople;
    if (leftover<=0)
    {
        console.log("No leftovers for you!");
     }
    else if (leftover<=2)
    {
        console.log("You have some leftovers");
     }
    else if (leftover<=5)
    {
        console.log("You have leftovers to share");
     }
     else 
    {
        console.log("Hold another party!");
     }
}
howMuchLeftOverCake(8,2);