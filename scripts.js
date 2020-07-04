// alert("Hvala!")

//selecting the second hand

var handSec = document.getElementsByClassName("sec")[0];
var handMin = document.getElementsByClassName("min")[0];
var handHr = document.getElementsByClassName("hr")[0];
var degHr = 0;
var degMin = 0;
var degSec = 0;

/* get current time from system */
var now = new Date();
var hr = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

//call time getter function
getTime(hr, min, sec);
//call the time counter function
countTime();


/* rotate hands as per the current time */
function getTime(hr, min, sec){
    if(hr >= 12){
        hr = hr - 12;
    }
    //subtracting 90 because I calculated 
    //the degree from 00:00hr but the hands 
    //begin at 03:00, thus -90deg
    degHr = hr*(360/12) - 90;
    degMin = min*(360/60) - 90;
    degSec = sec*(360/60) - 90;
    handHr.style.transform = "rotate("+degHr+"deg)"
    handMin.style.transform = "rotate("+degMin+"deg)"
    handSec.style.transform = "rotate("+degSec+"deg)"
}


/* start counting time */
function countTime(){
    setInterval(function(){
        degSec+=6;
        handSec.style.transform = "rotate("+degSec+"deg)";
    }, 1000);
    //min animation
    setInterval(function(){
        degMin+=6;
        handMin.style.transform = "rotate("+degMin+"deg)";
    }, 1000*60);
    //hr animation
    setInterval(function(){
        degHr+=6;
        handHr.style.transform = "rotate("+degHr+"deg)";
    }, 1000*3600);
}


