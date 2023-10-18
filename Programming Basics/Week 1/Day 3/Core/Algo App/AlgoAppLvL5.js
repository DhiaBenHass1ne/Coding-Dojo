////1////
for (var i=0; i<10;i++){
    console.log(i);
}
////2/////
var x=1;
for (var i=0; i<3;i++){
    x=x+1;
}
console.log(x);
////3////
var x=1;
for (var i=0; i<3;i=i+2){
    x=x+1;
}
console.log(x);
console.log(i);
////4////
var x=1;
for (var i=0; i<-1;i=i+2){
    x=x+1;
}
console.log(x);
////5////
var x=[];
for (var i=0; i<10;i++){
    x.push(i*2);
}
console.log(x);
////6////
var x=[1,3,5,8];
for ( var i=0;i<x.length;i++)
{
    if (x[i]>4)
    {
        x[i]=0;
    }
}
console.log(x);
////7////
var x=[-1,3,5,8];
for ( var i=0;i<x.length;i++)
{
    if (x[i]<i)
    {
        x[i]=-10;
    }
}
console.log(x);
////8////
for ( var i=20; i!=10; i--)
{
    console.log(i);
}
////9////
var x=0;
for (var i=1; i<4;i++)
{
    x=x+1;
    console.log(x);
    console.log(i);
}
////10////
var x=0;
for (var i=1; i<4;i=i+2)
{
    x=x+i;
    console.log(x);
    console.log(i);
}


