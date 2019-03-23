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

}

$("#begin").on("click", function(){
    game.questions = trivia;
});