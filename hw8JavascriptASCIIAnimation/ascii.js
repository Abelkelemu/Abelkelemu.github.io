$(document).ready( function(){
    var speed= 250;
    var intervalId;
    var timeoutId = [];
    var myString = [];
    var started = false;
  
    if(!started){
        $("#stop").prop("disabled",true);
    }
    // $("#animations").change(function(){
    //     if($("#animations").val()=="Custom"){
    //         stop();
    //     }
        
    // })
    $("#start").click(start);
    $('#stop').click(stop);
    $("#textarea").change(function(){
        if($("#animations").val()=="Custom"){
            ANIMATIONS['Custom'] = $("#textarea").val().replace(/\r?\n/g, '\n');
        }
        console.log(ANIMATIONS['Custom']);
    });
    $("#animations, #size, #speed").change(function(){
        $("#textarea").css('font-size',$('#size').val())
        if($('#speed').prop("checked")){
            speed = $("#speed").val();
        }
        else{
            speed = 250;
        }
       
       
        if(started){
            start();
        }
        else{
            $("#textarea").val(ANIMATIONS[$("#animations").val()]);
        }
    });

    function start(){
        
        $("#textarea").prop("disabled", true);
        $("#start").prop("disabled",true);
        $("#stop").prop("disabled",false);
        started = true;
        clearInterval(intervalId);
        for(let i =0; i<myString.length;i++){
            clearTimeout(timeoutId[i]);
        }
        var animationType = $("#animations").val();
        myString = ANIMATIONS[animationType];
        myString = myString.split("=====\n")
        myAnimation();
        intervalId = setInterval(myAnimation,speed*myString.length);
        function myAnimation(){
            for(let i =0; i<myString.length;i++){
                (function(index){
                    timeoutId[i] = setTimeout(function(){
                        $("textarea").val(myString[index])
                    },speed * index)
                })(i);
            }
        }
    }

   function stop(){
        started = false;
        $("#textarea").prop("disabled", false);
        $("#start").prop("disabled",false);
        $("#stop").prop("disabled",true);
        clearInterval(intervalId);
        for(let i =0; i<myString.length;i++){
            clearTimeout(timeoutId[i]);
        }
        $("#textarea").val(ANIMATIONS[$("#animations").val()]);
   }
});

