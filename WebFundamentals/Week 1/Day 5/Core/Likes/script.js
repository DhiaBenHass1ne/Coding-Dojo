var count1=9;
var count2=12;
var count3=9;

var likes1=document.querySelector("#l1")
var likes2=document.querySelector("#l2")
var likes3=document.querySelector("#l3")

function addLikesone(){
    count1+=1;
    likes1.innerText=count1+" Like(s)"
}

function addLikestwo(){
    count2+=1;
    likes2.innerText=count2+" Like(s)"
}

function addLikesthree(){
    count3+=1;
    likes3.innerText=count3+" Like(s)"
}