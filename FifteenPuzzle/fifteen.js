window.onload = function(){
    window.emptyX = 300; 
    window.emptyY = 300;
    init();
    document.getElementById("shufflebutton").onclick = shuffle;
    for(let i =0; i< document.getElementsByClassName("puzzlepiece").length;i++){
        document.getElementsByClassName("puzzlepiece")[i].addEventListener('click',move);    
    }
    highlightMovable();
}


const shuffle = function(){
    for(let i =0 ; i<1000; i++){
        var randomNumber = parseInt(Math.random() * 4);
    var tempX;
    var tempY;
    switch(randomNumber){
        case 0:  // up
            tempX = emptyX;
            tempY = emptyY-100;
            break;
        case 1: // right
            tempX = emptyX+100;
            tempY = emptyY;
            break;
        case 2:  // down
            tempX = emptyX;
            tempY = emptyY+100;    
            break;
        case 3: // left
            tempX = emptyX-100;
            tempY = emptyY;
            break;
    }
    if(getMySquare(tempX,tempY)){
        var pieceId = "square_"+ tempX + "_"+ tempY;
        var piece = document.getElementById(pieceId);
        move2(piece);
    }
    }
 }
 const getMySquare = function(x,y){
    var pieceId = "square_"+ x + "_"+ y;
    return document.getElementById(pieceId);
 }
const move = function(){
    move2(this)
}
const move2 = function(piece){
    var tempX = parseInt(piece.style.left);
    var tempY = parseInt(piece.style.top);
    if(checkMove(piece)){
        piece.style.left= emptyX +'px';
        piece.style.top= emptyY +'px';
        piece.id = "square_"+ emptyX + "_"+ emptyY;
        emptyX = tempX;
        emptyY = tempY;
        highlightMovable();
        
    }
}
const highlightMovable = function (){
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

const checkMove = function(piece){
    var x = parseInt(piece.style.left);
    var y = parseInt(piece.style.top);
    if(y == emptyY ){
        if(x+100 == emptyX || x-100 == emptyX){
            return true;
        }
    }
    else if(x == emptyX ){
        if(y+100 == emptyY || y-100 == emptyY){
            return true;
        }
    }
    else{
        return false;
    }
}



init = function() {
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