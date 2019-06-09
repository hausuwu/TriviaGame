

$(document).ready(function (){

    // game starts when user clicks the start button
    $("#start").on("click", gameTimer.startTimer);

})

// object containing method functions to display time and start the game
var gameTimer = {

    // set timer at 60 seconds
    timeRemaining : 10,

    // start the timer, begin game
    startTimer: function(){
        $("#timer").text("Time Remaining: " + gameTimer.timeRemaining);
        // count down by 1 second
        setInterval(gameTimer.countDown, 1000);
        // hides the start button so start can't be pressed again
        $("#start-screen").hide();
        // calls function to display trivia
        triviaGame.displayQuestions();
    },
    // Update the timer on the UI
    countDown: function(){
        // decrement time remaining
        gameTimer.timeRemaining--;
        // updates html with the time remaining
        $("#timer").text("Time Remaining: " + gameTimer.timeRemaining);
        // stops and removes the timer at zero 
        if(gameTimer.timeRemaining === 0){
            gameTimer.stopTimer();
        }
    },
    // stop timer check answers
    stopTimer: function(){

        clearInterval();
        // clears the timer from the html
        $("#timer").empty();
        // hides the timer because otherwise negatives are displayed
        $("#timer").hide();
        // triviaGame.checkAnswers();
    },
}

var triviaGame = {

    // displays trivia questions and answers on our html
    displayQuestions: function() {
        // variable to grab our html 
        var output = $("#questions-box");
        // updates html with headline to guide users
        output.append('<h2>Answer the following questions:</h2>');

        // for loop to construct trivia questions and adds them to the UI 
        for(var i = 0; i < myQuestions.length; i++){

            // updates our html with the trivia question from our myQuestions object
            output.append('<div id="question">' + myQuestions[i].question + '</div>');

            // variables to house each answer option
            var answer1 = myQuestions[i].answers[0];
            var answer2 = myQuestions[i].answers[1];
            var answer3 = myQuestions[i].answers[2];

            // updates the html with our answers and radio buttons so only one can be selected 
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer1 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer2 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer3 + '</label></div>');
        }

        var submitBtn = $('<br><button class="btn" id="submit-button">Submit</button>')
        output.append(submitBtn);
        $("#submit-button").on("click", gameTimer.stopTimer);
    },

}


// object holds trivia questions and answers
var myQuestions = [
    {
        question: "What movie series inspired the inclusion of the chainsaw as a weapon?", 
        answers: ["Evil Dead", "Texas Chainsaw Massacre", "American Psycho"],
        correctAnswer: "Evil Dead",
    },
    {
        question: "From what movie does the title 'DOOM' come from?",
        answers: ["War of the Worlds", "Total Recall", "The Color of Money"],
        correctAnswer: "The Color of Money",
    },
    {
        question: "while in development the game that would eventually become Doom was briefy considered to be based on what movie?",
        answers: ["Die Hard", "Aliens", "The Terminator"],
        correctAnswer: "Aliens",
    },
    
] 
