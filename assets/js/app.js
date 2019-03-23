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
    questionNumber: 0,

    reset: function () {
        this.questions = trivia;
        this.questionNumber = 0;
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
            </div>`;
            return display
        },
        
    nextQuestion: function () {
        currentQuestion = this.questions[this.questionNumber];
        $("#question").html(this.questionFormat(currentQuestion));
        $(".option").on("click", function(event) {
            if (event.target.innerText === currentQuestion.correct) console.log("correct")
            else console.log ("dumbass");
        })
    }
}

$("#begin").on("click", function(){
    game.reset();
});