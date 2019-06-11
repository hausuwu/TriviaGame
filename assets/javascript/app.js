
// ------------------- On Page Load -------------------

$(document).ready(function () {

    // game starts when user clicks the start button
    $("#start").on("click", startTimer);

});

// ------------------- Questions -------------------

// Array of objects holds trivia Q&As
var myQuestions = [
    {
        question: "What movie series inspired the inclusion of the chainsaw as a weapon?", 
        answers: ["Evil Dead", "Texas Chainsaw Massacre", "American Psycho", "Hellraiser"],
        correctAnswer: "Evil Dead",
    },
    {
        question: "The title 'DOOM' comes from a scene from what movie?",
        answers: ["War of the Worlds", "Total Recall", "The Color of Money", "Apocalypse Now"],
        correctAnswer: "The Color of Money",
    },
    {
        question: "Doom was oringially going to be a video game adaptation based on what movie?",
        answers: ["Die Hard", "Aliens", "The Terminator", "Robocop"],
        correctAnswer: "Aliens",
    },
    {
        question: "Which episode was not included in the orginal full retail game?",
        answers: ["Knee Deep in the Dead", "The Shores of Hell", "Inferno", "Thy Flesh Consumed"],
        correctAnswer: "Thy Flesh Consumed",
    },
    {
        question: "Who is credited with authoring the most maps in the original Doom",
        answers: ["John Romero", "Tom Hall", "Sandy Peterson", "American McGee"],
        correctAnswer: "Sandy Peterson",
    },

] 

// ------------------- Global Variables -------------------

// set game timer clock to 60 seconds
var timeRemaining = 666;
var correct;
var userAnswer;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;



// ------------------- Game Begins, Timer starts -------------------
    
    // start the timer, begin game
    function startTimer() {
        $("#timer").text("Time Remaining: " + timeRemaining);
        // count down by 1 second
        time = setInterval(countDown, 100);
        // hides the start button so start can't be pressed again
        $("#start-screen").empty();
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
        if(timeRemaining < 1){
            
            // calls the stop timer function
            stopTimer();

        }
    }



// ------------------- Display Questions -------------------

    // displays trivia questions and answers on our html
    function displayQuestions() {
        // variable to grab our html 
        var output = $("#questions-box");
        // updates html with headline to guide users
        output.append('<h2>Answer the following questions:</h2><hr>');

        // for loop to construct trivia questions and adds them to the UI 
        for(var i = 0; i < myQuestions.length; i++){

            // updates our html with the trivia question from our myQuestions object
            output.append('<h5>' + myQuestions[i].question + '</h5>');

            // variables to house each question's answer 
            var answer1 = myQuestions[i].answers[0];
            var answer2 = myQuestions[i].answers[1];
            var answer3 = myQuestions[i].answers[2];
            var answer4 = myQuestions[i].answers[3];


            // updates the html with our answers and radio buttons, assign the i value to input name, assign each possible answer a value 
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio'+i+'group" value="'+ answer1 +'" <label class="form-check-label" label" for="radio'+i+'">' + answer1 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio'+i+'group" value="'+ answer2 +'" <label class="form-check-label" label" for="radio'+i+'">' + answer2 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio'+i+'group" value="'+ answer3 +'" <label class="form-check-label" label" for="radio'+i+'">' + answer3 + '</label></div>');
            output.append('<div class="form-check form-check-inline mb-4"><input class="form-check-input" type="radio" name="radio'+i+'group" value="'+ answer4 +'" <label class="form-check-label" label" for="radio'+i+'">' + answer4 + '</label></div>');

            output.append('<hr>');

        }
        // create new submit button
        var submitBtn = $('<br><button type="button" class="btn btn-danger" id="submit-button">Submit</button>')
        // append the button to the button of the quiz
        output.append(submitBtn);
        // on click event that calls the stopTimer function to end game
        $("#submit-button").on("click", stopTimer);
    }

    function checkAnswers() {
        // loops through trivia questions
        for(var i = 0; i < myQuestions.length; i++) {
            // reassigns correct to the correctAnswer property in myQuestions Array
            correct = myQuestions[i].correctAnswer;
            // reassigns userAnswer the value of the checked input 
            userAnswer = $('input[name="radio'+i+'group"]:checked').val();
            
            // for loop is only running once for the first userAnswer, console is returning undefined for the remainder of the loop
            console.log(userAnswer);
            // for loop generates the correct answer
            console.log(correct);

            // for each loop is a possible solution? 
            // Or maybe a new function entirely creating an answer array and comparing that to an answer key
            
            // if conditions work for the first loop, 
            if (userAnswer === correct) {
                numCorrect++;
            }
            else if (userAnswer !== correct) {
                numIncorrect++;
            }
            // not sure how to check for unanswered  
            // else if ( userAnswer === ) {
            //     numUnanswered++;
            // }

            scoreScreen();
        }
    }
    


// ------------------- End Game -------------------

     // stop timer check answers
    function stopTimer() {

        // stop the countdown
        clearInterval(time);
        // removes the timer from the html
        $("#timer").empty();
        // call the check answers function
        checkAnswers();
    }



// ------------------- Display Score -------------------

    // removes questions and displays the user's score
    function scoreScreen() {

        // removes questions from the page
        $("#game-screen").empty();
        // updates empty divs with player's score
        $("#correct").text("Correct Answers: " + numCorrect);
        $("#incorrect").text("Incorrect Answers: " + numIncorrect);
        $("#unanswered").text("Unanswered Questions: " + numUnanswered);
    
    }



