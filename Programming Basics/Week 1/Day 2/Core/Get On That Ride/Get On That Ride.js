function rideREQ (height, age){
    if (height>=42 && age>=10) {
        console.log("Get on that ride, kiddo!")
    }
    else{console.log("Sorry kiddo. Maybe next year.")}

}
var h=42;
var a=9;
rideAndREQ(h,a);

function rideOrREQ (height, age){
    if (height>=42 || age>=10) {
        console.log("Get on that ride, kiddo!")
    }
    else{console.log("Sorry kiddo. Maybe next year.")}

}
var h=42;
var a=9;
rideOrREQ(h,a);