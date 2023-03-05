

window.onload = function () {
    document.getElementById("biggerDecorations").onclick = myTimer;
    document.getElementById('malkovitch').onclick = changeWord;
    document.getElementById('pigLatin').onclick = pigLatin;
};


function pigLatin(){
    const text = document.getElementById('myTextArea').value;
    const words = text.split(' ');
    const vowels = ["a", "e", "i", "o", "u"];
    
    const edited = words.map((word) => {
        const first = word[0].toLowerCase();
        if(vowels.includes(first)){
            return word + "ay";
        }
        else{
            let pos =1;
            for(let i = 1; i<word.length; i++){
                if(vowels.includes(word[i])){
                    break;
                }
                pos++;
            }
            const firstCluster = word.substring(0,pos);
            return word.slice(pos) + firstCluster + "ay";
        }
    })
    document.getElementById('myTextArea').value = edited.join(' ');
}

function changeWord(){
    const text = document.getElementById('myTextArea').value;
    const words = text.split(' ');
   

    // using replace 
    let result = text.replace(/[a-zA-Z]{5,}/g,"Malkovich");
    document.getElementById('myTextArea').value = result;
   
    // using for loop
    // for(let i =0 ; i < words.length;i++){
    //     if(words[i].length>=5){
    //         words[i]="Malkovich";
    //     }
    // }
    // document.getElementById('myTextArea').value = words.join(' ');

     // using map
    //  const replaced = words.map(word => {
    //     if (word.length >= 5) {
    //       return "Malkovich";
    //     } else {
    //       return word;
    //     }
    //   });
    //   document.getElementById('myTextArea').value = replaced.join(' ');
}

function myTimer(){
    setInterval(biggerDec,500);
}
function biggerDec() {
    var size = parseInt(document.getElementById("myTextArea").style.fontSize);
    size += 4; 
    document.getElementById("myTextArea").style.fontSize = size + "pt";           
}

function myFunction(){
    const isChecked = document.getElementById("myCheckbox").checked;
    if(isChecked){
        var myStyle =  document.getElementById("myTextArea").style;
        myStyle.fontWeight = "bold";
        myStyle.color = "green";
        myStyle.textDecoration = "underline"
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        
    }
    else{
        var myStyle =  document.getElementById("myTextArea").style;
        myStyle.fontWeight = "normal";
        myStyle.color = "black";
        myStyle.textDecoration = "none"
        document.body.style.backgroundImage= "none";
    }
}