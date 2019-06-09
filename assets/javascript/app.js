

$(document).ready(function (){

    // game starts when user clicks the start button
    $("#start").on("click", gameState.startTimer);

})

// object containing functions to display time 
var gameState = {

    // set timer at 60 seconds
    timeRemaining : 10,

    // start the timer, begin game
    startTimer: function(){
        $("#timer").text("Time Remaining: " + gameState.timeRemaining);
        // count down by 1 second
        setInterval(gameState.countdown, 1000);
        // hides the start button so start can't be pressed again
        $("#start-screen").hide();
        // calls function to display trivia
        trivia.displayQuestions();
    },
    // Update the timer on the UI
    countdown: function(){
        // decrement time remaining
        gameState.timeRemaining--;
        // updates html with the time remaining
        $("#timer").text("Time Remaining: " + gameState.timeRemaining);
        // stops and removes the timer at zero 
        if(gameState.timeRemaining === 0){
            gameState.stopTimer();
        }
    },
    // stop timer check answers
    stopTimer: function(){

        clearInterval();
        // clears the timer from the html
        $("#timer").empty();
        // hides the timer because otherwise negatives are displayed
        $("#timer").hide();
        // trivia.checkAnswers();
    },
}

var trivia = {

    // displays trivia questions and answers on our html
    displayQuestions: function() {
        // variable to append questions and answers to the html
        var output = $("#questions-box");
        // updates html with headline to guide users
        output.append('<h2>Answer the following questions:</h2>');

        // for loop to construct trivia questions and adds them to the UI 
        for(var i = 0; i < myQuestions.length; i++){

            // updates our html with the trivia question from our myQuestions object
            output.append('<div id="question">' + myQuestions[i].question + '</div>');

            // variables to house each potential answer
            var answer1 = myQuestions[i].answers[0];
            var answer2 = myQuestions[i].answers[1];
            var answer3 = myQuestions[i].answers[2];

            // updates the html with our answers and radio buttons so only one can be selected 
            output.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"><label class="form-check-label" for="inlineRadio1">' + answer1 + '</label></div>');
            output.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"><label class="form-check-label" for="inlineRadio1">' + answer2 + '</label></div>');
            output.append('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"><label class="form-check-label" for="inlineRadio1">' + answer3 + '</label></div>');


            
            
        }
    }
}


// object holds trivia questions and answers
var myQuestions = [
    {
        question: "What movie series inspired the inclusion of the chainsaw as a weapon?", 
        answers: ["Evil Dead", "Texas Chainsaw Massacre", "American Psycho"],
        correctAnswer: "Evil Dead",
    }
] 
