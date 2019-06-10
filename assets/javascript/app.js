
// loads entire page
$(document).ready(function () {

    // game starts when user clicks the start button
    $("#start").on("click", startTimer);

});

// ------------------- Questions -------------------

// Array holds trivia questions and answers
var myQuestions = [
    {
        question: "What movie series inspired the inclusion of the chainsaw as a weapon?", 
        answers: ["Evil Dead", "Texas Chainsaw Massacre", "American Psycho", "Hellraiser"],
        correctAnswer: "Evil Dead",
    },
    {
        question: "From what movie does the title 'DOOM' come from?",
        answers: ["War of the Worlds", "Total Recall", "The Color of Money", "Apocalypse Now"],
        correctAnswer: "The Color of Money",
    },
    {
        question: "while in development the game that would eventually become Doom was briefy considered to be based on what movie?",
        answers: ["Die Hard", "Aliens", "The Terminator", "Robocop"],
        correctAnswer: "Aliens",
    },

] 

// ------------------- Global Variables -------------------

// set game timer clock to 60 seconds
var timeRemaining = 60;
var correct;
var userAnswer;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;



// ------------------- Game Timer -------------------
    
    // start the timer, begin game
    function startTimer() {
        $("#timer").text("Time Remaining: " + timeRemaining);
        // count down by 1 second
        setInterval(countDown, 1000);
        // hides the start button so start can't be pressed again
        $("#start-screen").hide();
        // calls function to display trivia
        displayQuestions();
    }

    // Update the timer on the UI
    function countDown() {
        // decrement time remaining
        timeRemaining--;
        // updates html with the time remaining
        $("#timer").text("Time Remaining: " + timeRemaining);
        // stops and removes the timer at zero 
        if(timeRemaining === 0){
            stopTimer();
        }
    }

    // stop timer check answers
    function stopTimer() {

        clearInterval();
        // clears the timer from the html
        $("#timer").empty();
        // hides the timer because otherwise negatives are displayed
        $("#timer").hide();
        // checkAnswers();
    }


// ------------------- Display Questions -------------------

    // displays trivia questions and answers on our html
    function displayQuestions() {
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
            var answer4 = myQuestions[i].answers[3];


            // updates the html with our answers and radio buttons so only one can be selected 
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer1 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer2 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer3 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio '+i+' group" id="radio '+i+'" <label class="form-check-label" id="radio '+i+' label" for="radio '+i+'">' + answer4 + '</label></div>');

        }

        var submitBtn = $('<br><button class="btn" id="submit-button">Submit</button>')
        output.append(submitBtn);
        $("#submit-button").on("click", stopTimer);
    }

    function checkAnswers() {
        
        for(var i = 0; i < myQuestions.length; i++) {
            correct = myQuestions[i].correctAnswer;
            userAnswer = $('input[id=radio'+i+']:checked + label').text();

            if (userAnswer === correct) {
                numCorrect++;
            }
            else if (userAnswer !== correct) {
                numIncorrect++;
            }
            else if ( userAnswer === "") {
                numUnanswered++;
            }
        }
    } 

// ------------------- End Game -------------------

    function scoreScreen() {
        $("#question-box").empty();
    }



