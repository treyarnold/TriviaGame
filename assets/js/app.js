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
                {question: "Who was the Lord Commander of the Night's watch before Jon Snow?",
                correct: "Jeor Mormont",
                options: ["Jorah Mormont", "Maege Mormont", "Lynesse Mormont", "Jeor Mormont"]},
                {question: "How did The Hound's face get burned?",
                correct: "His brother held him in a fire",
                options: ["His brother held him in a fire", "A battle scar from the Battle of the Blackwater", "He burnt himself to show his faith", "King Joffrey did it for fun"]},
                {question: "What is The Hound's real name?",
                correct: "Sandor Clegane",
                options: ["Tytos Clegane", "Gregor Clegane", "Sandor Clegane", "Tyrith Clegane"]},
                {question: "What is the name of the butcher's boy that the Hound killed?",
                correct: "Mycah",
                options: ["Mrycella", "Mythos", "Melisandre", "Mycah"]},
                {question: "Which is not a Stark?",
                correct: "Bronn",
                options: ["Lyanna", "Bran", "Bronn", "Rickon"]},
                {question: "Who has not served Daenerys Targaryen?",
                correct: "Jeor Mormont",
                options: ["Tyrion Lanniser", "Jeor Mormont", "Doreah", "Barristan Selmy"]},
                {question: "In what city did Daenerys meet Khal Drogo?",
                correct: "Pentos",
                options: ["Pentos", "Braavos", "Qarth", "Volantis"]},
                {question: "What region does Sam Tarly come from?",
                correct: "Highgarden",
                options: ["Riverlands", "North", "Stormlands", "Highgarden"]},
                {question: "When Jon Snow finds the direwolf pups, what had killed their mother?",
                correct: "A stag",
                options: ["A hunter", "A stag", "The cold", "A bear"]},
                {question: "During the Battle of Blackwater, who rallied the defenders of King's Landing?",
                correct: "Tyrion",
                options: ["Tywin", "Joffrey", "Tyrion", "Jamie"]},
                {question: "Who did Rob Stark capture in battle?",
                correct: "Jamie",
                options: ["Tywin", "Joffrey", "Tyrion", "Jamie"]},
                {question: "What was the name of Rob Stark's wolf?",
                correct: "Grey Wind",
                options: ["Summer", "Grey Wind", "Shaggy Dog", "Lady"]},
                {question: "Where does Sam go to learn to be a Maester?",
                correct: "Oldtown",
                options: ["Oldtown", "Pentos", "Casterly Rock", "Qarth"]},
                {question: "What brother of King Robert goes north to protect the wall?",
                correct: "Stanis",
                options: ["Renly", "Eddard", "Tywin", "Stanis"]},
                {question: "Who was Reek?",
                correct: "Theon",
                options: ["Theon", "Stanis", "Gendry", "Hot Pie"]},
                {question: "Who does Daenerys banish for spying on her?",
                correct: "Jorah Mormont",
                options: ["Melisandre", "Barristan Selmy", "Jorah Mormont", "Tyrion Lannister"]},
            ]

const game = {
    questions: [],
    questionNumber: -1,
    timer: 10,
    correctCount: 0, 
    incorrectCount: 0,

    reset: function () {
        game.questions = [];
        // for (let i=0; i<10; i++) game.questions.push(trivia[i]);
        while (game.questions.length < 10) {
            number = Math.floor(Math.random() * trivia.length);
            console.log(number, trivia[number]);
            console.log (game.questions.indexOf(trivia[number]));
            console.log ((game.questions.indexOf(trivia[number]) >= 0));
            if (!(game.questions.indexOf(trivia[number]) >= 0)) game.questions.push(trivia[number])
        }
        console.log(game.questions.length);
        game.questionNumber = -1;
        game.correctCount = 0;
        game.incorrectCount = 0;
        $("#correct").text(game.correctCount);
        $("#incorrect").text(game.incorrectCount);
        game.nextQuestion();
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
            <div class="d-flex justify-content-center align-items-center">
                <span class="mr-3">Time Remaining: </span>
                <span id="timer">10</span>
            </div>`;
        return display
        },

    correct: function () {
        let display = 
            `<hr>
            <div class="container text-center">
                <div class="row">
                    <p class="display-2 d-none d-md-block text-success">Correct!!</p>
                    <p class="display-4 d-md-none text-success">Correct!!</p>
                </div>
                <div class="row mt-5">
                    <p>The correct answer was ${currentQuestion.correct}
                </div>
            </div>`;
        $("#question").html(display);
        game.correctCount++;
        $("#correct").text(game.correctCount);
        setTimeout(game.nextQuestion, 3000);
    },
    
    incorrect: function () {
        let display = 
            `<hr>
            <div class="container text-center">
                <div class="row">
                    <p class="display-2 d-none d-md-block text-danger text-center">Wrong one, Dumbass</p>
                    <p class="display-4 d-md-none text-danger text-center">Wrong one, Dumbass</p>
                </div>
                <div class="row mt-5">
                    <p>The correct answer was ${currentQuestion.correct}
                </div>
            </div>`;
        $("#question").html(display);
        game.incorrectCount++;
        $("#incorrect").text(game.incorrectCount);
        setTimeout(game.nextQuestion, 3000);
    },
    
    timeout: function () {
        let display = 
            `<hr>
            <div class="container">
                <div class="row">
                    <p class="display-2 text-danger d-none d-md-block text-center">Time's up</p>
                    <p class="display-4 text-danger d-md-none text-center">Time's up</p>
                </div>
                <div class="row mt-5">
                    <p>The correct answer was ${currentQuestion.correct}
                </div>
            </div>`;
        $("#question").html(display);
        game.incorrectCount++;
        $("#incorrect").text(game.incorrectCount);
        setTimeout(game.nextQuestion, 3000);
    },

    gameover: function () {
        $("#questionTitle").text(`Game Over`)
        let display = 
            `<hr>
            <div class="container">
                <div class="row"n">
                    <p>Here is how you did:</p>
                </div>
                <div class="row justify-content-around" id="options">
                    <div class="col-md-5">
                        Correct:
                    </div>
                    <div class="col-md-5 text-success">
                        ${game.correctCount}
                    </div>                        
                </div>
                <div class="row justify-content-around">
                    <div class="col-md-5">
                        Incorrect:
                    </div>
                    <div class="col-md-5 text-danger">
                        ${game.incorrectCount}
                    </div>                        
                </div>
            </div>
            <hr>
            <div class="text-center">
                <button id="playAgain">Play Again?</button>
            </div>`;
        $("#question").html(display);
        $("#playAgain").on("click", game.reset);
    },
    
    nextQuestion: function () {
        game.questionNumber++;
        if (game.questionNumber === 10) {
            return game.gameover();
        }
        currentQuestion = game.questions[game.questionNumber];
        game.timer = 10;
        $("#question").html(game.questionFormat(currentQuestion));
        let interval = setInterval(() => {
            if (game.timer > 0){
                game.timer--;
                $("#timer").text(game.timer);
            } else {
                clearInterval(interval);
                game.timeout(currentQuestion);
            }
        }, 1000);
        $(".option").on("click", (event) => {
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