const span= document.getElementById("Color");
const body = document.querySelector("body");
const btn = document.getElemenntById("btn");
const hexcol = document.getElementById("hexcol");

function generatehex(){
    var str = "1234567890abcdef";
    var count=0;
    var color ="#";
    
    while(count < 6){
        color = color+ str[Math.floor(Math.random()*str.length)];
        count++;
    }
    span.innerHTML = color;
    body.style.background = color;
}