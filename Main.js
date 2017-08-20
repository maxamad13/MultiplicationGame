var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start /reset


$("#startreset").click(function(){
    console.log("start reset");
    if(playing == true){
        location.reload();//reload page
   
    }else{
        
        //change game to playing
        playing = true;
        score = 0;
        //document.getElementById("scorevalue").innerHTML= score;
        $("#scorevalue").html(score);
        
        //show countdown box
        $("#timeremaining").show();
        timeremaining = 60;
        
        //hide gameOver
        $("#gameOver").hide();
        $("#tiveremainingvalue").html(timeremaining);
        //document.getElementById("tiveremainingvalue").innerHTML = //timeremaining;   
        
        //change to reset
       $("#startreset").html("Reset");
        // document.getElementById("startreset").innerHTML="Reset //Game"
        
        //start countdown
        startCountdown();
        
        //generate a new Q&A
        generateQA();
        
    }
    
});
//clicking answer box

for(i=1;i<5;i++){
    $("#box" + i).click(function(){
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            //correct answer
            score++;
            $("#score").html(score);
            
            //correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct")
            }, 1000)
            //generate new questionsQA
            generateQA();
        
            
           }else{
               hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong")
            }, 1000)
           }
       }
})
    
}
//if we are playing
//  reload page
//if we are not playing
//show countdown box
//start reducing time in loops by seconds
//check timeleft
//yes->continue otherwise gameover.
//change button to reset
//generate new Q&A

//if we click on answer box
//if we are playing
//correct>?
//yfest
//increas score
// show correct box for one second
//also generate new questions and answers.
//if the answer is show try box again

//functions 

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -=1;
        $("#tiveremainingvalue").html(timeremaining);   
        if(timeremaining==0){
          stopCountdown();
            $("#gameOver").show();
            $("#gameOver").html(
                "<p>Game Over!</><p>Your Schore is: " + score + "<p/>")
           hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            
            $("#startreset").html("Start Game");
            
        }
    }, 1000)
}

//stop counter
function stopCountdown(){
     clearInterval(action);
}


//hide certain elements
//Method for hiding element
function hide(id){
    document.getElementById(id).style.display="none";
}

//show certain elements
function show(id){
        document.getElementById(id).style.display="block";

}

//generate questions and aswers
function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x *y;
    $("#question").html(x + "x" + y);
    console.log(correctAnswer);
    var correctPosition =1 + Math.round(3*Math.random());
    $("#box" + correctPosition).html(correctAnswer);
    
    //fill other boxes with wrong answers
    var answrs = [correctAnswer];
    for(i = 1; i <5; i++){
        if(i!=correctPosition){
            var wrongAnswer;
          do{
               wrongAnswer=(1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
          }while(answrs.indexOf(wrongAnswer)>-1)
          
            $("#box" + i).html(wrongAnswer);
            answrs.push(wrongAnswer);
        }
    }
    
}










