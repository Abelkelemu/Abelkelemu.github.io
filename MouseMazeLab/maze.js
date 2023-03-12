'use strict'
var started = false;
$(document).ready(function(){
    $("#maze .boundary").mouseover(changeColor);
    $("#end").mouseover(end);
    $("#start").click(start);
    $("#maze").mouseleave(changeColor);
})


function changeColor(){
    if(started){
        started = false;
        $("#maze .boundary").addClass("youlose");
        $("#status").text("Game Over !"); 
    }
}

function end(){
    if(started){
        started = false;
        $("#status").text("You Win!");
    }
}

function start (){
    started = true;
    $("#maze .boundary").removeClass("youlose");
    $("#status").text("Game has Started!");
}