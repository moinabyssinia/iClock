// alert("Hvala!")

//selecting the second hand

var handSec = document.getElementsByClassName("sec")[0];
var handmin = document.getElementsByClassName("min")[0];
var handhr = document.getElementsByClassName("hr")[0];
var x = 0;

//sec animation
setInterval(function(){
    x+=6;
    handSec.style.transform = "rotate("+x+"deg)";
}, 1000);
//min animation
setInterval(function(){
    x+=6;
    handmin.style.transform = "rotate("+x+"deg)";
}, 1000*60);
//hr animation
setInterval(function(){
    x+=6;
    handhr.style.transform = "rotate("+x+"deg)";
}, 1000*3600);
