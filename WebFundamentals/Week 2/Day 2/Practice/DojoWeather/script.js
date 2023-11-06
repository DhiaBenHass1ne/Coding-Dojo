console.log("hello from script");

function message(){
    alert("Loading weather report...");
}

function convert(element){
    var hot1=document.querySelector("#one .hot").innerText
    var hot2=document.querySelector("#two .hot").innerText
    var hot3=document.querySelector("#three .hot").innerText
    var hot4=document.querySelector("#four .hot").innerText

    var cold1=document.querySelector("#one .cold").innerText
    var cold2=document.querySelector("#two .cold").innerText
    var cold3=document.querySelector("#three .cold").innerText
    var cold4=document.querySelector("#four .cold").innerText

    if (element.value=="F"){
        document.querySelector("#one .hot").innerText=Math.round(hot1.slice(0,2)*9/5+32)+"°";
        document.querySelector("#two .hot").innerText=Math.round(hot2.slice(0,2)*9/5+32)+"°";
        document.querySelector("#three .hot").innerText=Math.round(hot3.slice(0,2)*9/5+32)+"°";
        document.querySelector("#four .hot").innerText=Math.round(hot4.slice(0,2)*9/5+32)+"°";

        document.querySelector("#one .cold").innerText=Math.round(cold1.slice(0,2)*9/5+32)+"°";
        document.querySelector("#two .cold").innerText=Math.round(cold2.slice(0,2)*9/5+32)+"°";
        document.querySelector("#three .cold").innerText=Math.round(cold3.slice(0,2)*9/5+32)+"°";
        document.querySelector("#four .cold").innerText=Math.round(cold4.slice(0,2)*9/5+32)+"°";
        
    }
    if (element.value=="C"){
        document.querySelector("#one .hot").innerText=Math.round((hot1.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#two .hot").innerText=Math.round((hot2.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#three .hot").innerText=Math.round((hot3.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#four .hot").innerText=Math.round((hot4.slice(0,2)-32)*5/9)+"°";

        document.querySelector("#one .cold").innerText=Math.round((cold1.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#two .cold").innerText=Math.round((cold2.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#three .cold").innerText=Math.round((cold3.slice(0,2)-32)*5/9)+"°";
        document.querySelector("#four .cold").innerText=Math.round((cold4.slice(0,2)-32)*5/9)+"°";
    }
}

function removeMe (){
    document.querySelector(".cookie").remove();
}