window.onload = function () {
    $("#start-button").on("click", game.triviaTimer);
    $("#finish-button").hide();
};

var game = {

    timer: 0,
    seconds: 10,

    triviaTimer: function () {
        $("#start-button").hide();
        $("#timer").html('<div>00:' + game.seconds + '</div>').addClass('theTime');
        game.timer = setInterval(game.count, 1000);
        trivia.questionForm();
    },

    count: function () {
        game.seconds--;
        game.checkTime();
        $("#timer").html('<div>00:' + game.seconds + '</div>').addClass('theTime');
        if (game.seconds < 1) {
            game.stopGame();
        };
    },

    stopGame: function () {
        clearInterval(game.timer);
        trivia.checkScore();
    },

    // Adds a zero in front of numbers < 10
    checkTime: function () {
        if (game.seconds < 10) {
            game.seconds = "0" + game.seconds
        };
        return game.seconds;
    },
}

//   Object containing trivia questions and answers.  Using jquery to add all ten questions to page.
var trivia = {

    questionForm: function () {

        var questionForm = $("#question-form");

        for (let i = 0; i < questionArr.length; i++) {

            questionForm.append('<div>' + questionArr[i].question + '<div>').addClass("mt-4");

            let answerOne = questionArr[i].choices[0];
            let answerTwo = questionArr[i].choices[1];
            let answerThree = questionArr[i].choices[2];
            let answerFour = questionArr[i].choices[3];

            questionForm.append('<div class="form-check my-2"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answerOne + '</label></div>');

            questionForm.append('<div class="form-check my-2"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answerTwo + '</label></div>');

            questionForm.append('<div class="form-check my-2"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answerThree + '</label></div>');

            questionForm.append('<div class="form-check my-2 mb-5"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answerFour + '</label></div>');
        }

        var finish = $("#finish-button");
        finish.show();
        $("#finish-button").on("click", game.stopGame);
    },

    


    

    //  Funtion to check amount of correct and incorrect answers.
    // checkScore: function () {

    // }

}


//  Array of questions, multiple choices, and correct answer.
var questionArr = [

    {
        question: "Where did Darth Vader reveal himself to be Luke's father?",
        choices: ["Dagobah", "The Death Star", "Endor", "Cloud City"],
        answer: "Cloud City"
    },
    {
        question: "What is Count Dooku's Sith name?",
        choices: ["Darth Tyranus", "Darth Rex", "Darth Sidious", "Darth Maul"],
        answer: "Darth Tyranus"
    },
    {
        question: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
        choices: ["Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Qui-Gon Jinn"],
        answer: "Qui-Gon Jinn"
    },
    {
        question: "What game do Chewbacca and R2-D2 play in 'A New Hope'?",
        choices: ["Jugger", "Cheops", "Tri-dimensional Chess", "Dejarik"],
        answer: "Dejarik"
    },
    {
        question: "Who killed Jango Fett?",
        choices: ["Mace Windu", "Obi-Wan Kenobi", "Boba Fett", "Anakin Skywalker"],
        answer: "Mace Windu"
    },
    {
        question: "What micro-organisms are said to be conductors of the Force?",
        choices: ["Force Ghosts", "Chlorimidians", "Mitochodria", "Midichlorians"],
        answer: "Midichlorians"
    },
    {
        question: "What did Luke Skywalker's uncle, Owen, operate on Tatooine?",
        choices: ["Droid Repair Service", "Speeder Repair Garage", "Cantina", "Moisture Farm"],
        answer: "Moisture Farm"
    },
    {
        question: 'What does the "TIE" in TIE Fighter stand for?',
        choices: ["Turbo Induction Encabulator", "Twin Ion Engine", "Techno Incantho Envulcanator", "Thermal Inverse Engine"],
        answer: "Twin Ion Engine"
    },
    {
        question: "Which bounty hunter did Han Solo kill in 'Episode IV: A New Hope'?",
        choices: ["Bossk", "Nien Nunb", "Greedo", "Boba Fett"],
        answer: "Greedo"
    },
    {
        question: "What were the two opposing organizations in the Clone Wars?",
        choices: ["The Galactic Republic and the Separatist Alliance", "The Rebel Alliance and the Galactic Empire", "The Jedi and the Sith", "The Gungan Grand Army and the Tusken Raiders"],
        answer: "The Galactic Republic and the Separatist Alliance"
    }

]