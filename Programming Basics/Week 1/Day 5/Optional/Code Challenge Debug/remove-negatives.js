// Debug the following code that removes negative values from an array

function removeNegatives(arr) { // Removed the var
    for(var i=0; i<=arr.length-1; i++) { // changed arr.length to arr.length-1 to avoid passing the element count
        if(arr[i] < 0) { // changed the '=<' to '<' so the function wouldnt count 0 as a negative value
            arr.splice(i,1) // this entire line is wrong -- replaced with a statement that does the job needed
            //Removed the "i--" or else the loop would not increment
        }
    }
    return arr; // Wrong name
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);