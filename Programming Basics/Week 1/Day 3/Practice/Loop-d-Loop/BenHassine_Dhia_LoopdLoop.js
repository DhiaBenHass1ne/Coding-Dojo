//We know that we need a loop because we have a repetitive task
//the starting point of the loop is 0 where the the runner just started running
//the loop stops after giving the runner a piece of candy when he reaches 6 miles
//the loop knows when to stops by specifying the stoping condition in the loop's parameteres
//the number of miles
// we need variables for the number of miles and the speed

var speed=5.5;
for (var miles=0; miles<6; miles++) {
    if (miles%2 === 0 && speed>=5.5 ){
        console.log("Here's a piece of candy")
    }

}