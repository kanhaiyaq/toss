var random1=Math.floor(Math.random()*6)+1;
// alert(random);
var k1="dice"+random1+".png";
// alert(k);
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",k1);
// var image1=document.querySelectorAll("img")[1];
// image1.setAttribute("src",k);

var random2=Math.floor(Math.random()*6)+1;
// alert(random);
var k2="dice"+random2+".png";
// alert(k);
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",k2);
// var image1=document.querySelectorAll("img")[1];
// image1.setAttribute("src",k);

if(random1>random2)
{
    document.querySelector("h3").innerHTML="🎉Player 1 Wins🎉";
}
else if(random2>random1)
{
    document.querySelector("h3").innerHTML="🎉Player 2 Wins🎉";
}
else{
    document.querySelector("h3").innerHTML="😟 OOPS! RefreshAgain "
}