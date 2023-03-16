/*
 The goal of fifteen puzzle is to un-jumble its fifteen 
 squares by repeatedly making moves that slide squares into the 
 empty space.
*/
"use-strict"
$(document).ready( function(){
    EMPTY_X = 300; 
    EMPTY_Y = 300;
    init();
    $("#shufflebutton").click(shuffle)
    $(".puzzlepiece").click(move);
    highlightMovable();
// to initialize the puzzle
     function init() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");  
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            // store x and y for later
            div.x = x;
            div.y = y; 
            div.id = "square_"+ x + "_"+y;
        }        
    };

// to check if a piece is movable
function checkMove(piece){
    var x = parseInt(piece.style.left);
    var y = parseInt(piece.style.top);
    if(y == EMPTY_Y ){
        if(x+100 == EMPTY_X || x-100 == EMPTY_X){
            return true;
        }
    }
    else if(x == EMPTY_X ){
        if(y+100 == EMPTY_Y || y-100 == EMPTY_Y){
            return true;
        }
    }
    else{
        return false;
    }
}

// to highlight movables when the user hovers over them
function highlightMovable(){
    var divs = document.getElementsByClassName("puzzlepiece");
    for(let i =0; i< divs.length;i++){
        var div = divs[i];
        if(checkMove(div)){
            div.classList.add("movablepiece");
        }
        else{
            div.classList.remove("movablepiece")
        }
    }
}

// to move a piece 
    function move(){
        movePiece(this);
    }
    function movePiece(piece){
        if(checkMove(piece)){
            var tempX = parseInt(piece.style.left);
            var tempY = parseInt(piece.style.top);
            piece.style.left= EMPTY_X +'px';
            piece.style.top= EMPTY_Y +'px';
            piece.id = "square_"+ EMPTY_X + "_"+ EMPTY_Y;
            EMPTY_X = tempX;
            EMPTY_Y = tempY;
            highlightMovable();
        }
    }
// to get a piece by passing the coordinates 
    function getPiece(x,y){
        var pieceId = "square_"+ x + "_"+ y;
        return document.getElementById(pieceId);
    }

// to shuffle the puzzle
    function shuffle (){
        for(let i =0 ; i<1000; i++){
            var randomNumber = parseInt(Math.random() * 4);
            var tempX;
            var tempY;
            switch(randomNumber){
                case 0:  // up
                    tempX = EMPTY_X;
                    tempY = EMPTY_Y-100;
                    break;
                case 1: // right
                    tempX = EMPTY_X+100;
                    tempY = EMPTY_Y;
                    break;
                case 2:  // down
                    tempX = EMPTY_X;
                    tempY = EMPTY_Y+100;    
                    break;
                case 3: // left
                    tempX = EMPTY_X-100;
                    tempY = EMPTY_Y;
                    break;
            }
            var piece = getPiece(tempX,tempY);
            if(piece){
                movePiece(piece);
            }
        }
     }
});