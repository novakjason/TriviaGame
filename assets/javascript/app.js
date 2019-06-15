window.onload = function () {
    $("#start-button").on("click", game.triviaTimer);
};

var game = {
    timer: 0,
    seconds: 10,

    triviaTimer: function () {
        $("#start-button").hide();
        $("#timer").html('<div class="theTime">00:' + game.seconds + '</div>');
        game.timer = setInterval(game.count, 1000);
        trivia.questionForm();
    },
    
    count: function () {
        game.seconds--;
        game.checkTime();
        $("#timer").html('<div class="theTime">00:' + game.seconds + '</div>');
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
    }
}



