console.log("Hello from script");

var reqspan= document.querySelector(".badgereq")

var connectspan=document.querySelector(".badgecon")

var username= document.querySelector("#username")

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    var cn = parseInt(connectspan.innerText.split('+')[0])
    console.log(cn);
    connectspan.innerText = cn+1+"+"
    reqspan.innerText--;
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    reqspan.innerText--;
}
function edit(){
    username.innerText ="Marisa G";
}

