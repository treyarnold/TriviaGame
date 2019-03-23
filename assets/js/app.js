const trivia = [{question: "What house commited the massacre known as the Red Wedding?",
                correct: "House Frey",
                options: ["House Tully", "House Frey", "House Stark", "House Lannister"]},
                {question: "Who was Arya's dance instructor?",
                correct: "Syrio Forel",
                options: ["Syrio Forel", "Ned Stark", "Brienne of Tarth", "Jaqen H'ghar"]},
                {question: "How did Daenerys hatch her dragon eggs?",
                correct: "In a funeral pyre",
                options: ["Sitting on them", "In a firepit", "In a funeral pyre", "In a storm"]},
                {question: "What does Valar Morghulis mean?",
                correct: "All men must die",
                options: ["All men must serve", "All men must live", "All men must dance", "All men must die"]},
            ]

const game = {
    questions: [],
    questionNumber: -1,
    timer: 10,

    reset: function () {
        this.questions = trivia;
        this.questionNumber = -1;
        this.nextQuestion();
    },

    questionFormat: function (currentQuestion) {
        $("#questionTitle").text(`Question: ${this.questionNumber + 1}`)
        let display = 
            `<hr>
            <div class="container">
                <div class="row" id="currentQuestion">
                    <p>${currentQuestion.question}</p>
                </div>
                <div class="row justify-content-around" id="options">
                    <div class="col-md-5 option" id="option0">
                        ${currentQuestion.options[0]}
                    </div>
                    <div class="col-md-5 option" id="option1">
                        ${currentQuestion.options[1]}
                    </div>                        
                </div>
                <div class="row justify-content-around" id="options">
                    <div class="col-md-5 option" id="option2">
                        ${currentQuestion.options[2]}
                    </div>
                    <div class="col-md-5 option" id="option3">
                        ${currentQuestion.options[3]}
                    </div>                        
                </div>
            </div>
            <hr>
            <div class="text-center">
                <span>Time Remaining: </span>
                <span id="timer">10</span>
            </div>`;
            return display
        },

    correct: function () {
        console.log("correct")
    },

    incorrect: function () {
        console.log("incorrect")
    },

    timeout: function () {
        let display = 
            `<hr>
            <div class="container">
                <div class="row">
                    <p class="display-2 text-danger">Time's up</p>
                </div>
                <div class="row mt-5">
                    <p>The correct answer was ${currentQuestion.correct}
                </div>
            </div>`;
        $("#question").html(display);
        setTimeout(this.nextQuestion, 5000);
    },
        
    nextQuestion: function () {
        game.questionNumber++;
        currentQuestion = game.questions[game.questionNumber];
        game.timer = 10;
        $("#question").html(game.questionFormat(currentQuestion));
        let interval = setInterval(()=>{
            if (game.timer > 0){
                game.timer--;
                $("#timer").text(game.timer);
            } else {
                clearInterval(interval);
                game.timeout(currentQuestion);
            }
        }, 1000);
        $(".option").on("click", function(event) {
            clearInterval(interval);
            if (event.target.innerText === currentQuestion.correct) {
                game.correct();
            } else {
                game.incorrect();
            }
        })
    }
}

$("#begin").on("click", function(){
    game.reset();
});