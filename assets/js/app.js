(function($) {
    // Non-DOM-ready-required code here (scope-safe)
    $(function() {
        //$('#startGame').modal('show');
        const trivia = {
            questionsArr: [
                {
                    question: "How many members in the Spice Girl group",
                    options: [ 3, 1, 5, 4, 6],
                    answer: 5,
                    imgSrc: "../imgs/spicegirls.gif"
                },
                {
                    question: "Who came first?",
                    options: ["NSYNC","PSY","The Backstreet Boys","Nirvana",],
                    answer: "Nirvana",
                    imgSrc: "../imgs/nirvana.gif"
                },
                {
                    question: "In the TV show Friends: Who teaches Rachel and Phoebe about 'Unagi'?",
                    options: ["Joey","Ross","Monica","Gunther",],
                    answer: "Ross",
                    imgSrc: "../imgs/ross.gif"
                
                },
                {
                    question: "Who wrote the book series Goosebumps?",
                    options: ["George R. R. Martin","Stephen King","J.K Rowling","R.L. Stine",],
                    answer: "R.L. Stine",
                    imgSrc: "../imgs/goosebumps.gif"
                },
                {
                    question: "Complete the lyric 'You are my fire. The one desire. Believe when I say. _________'",
                    options: ["I ate your cheesecake","I want it that way","I'm running that way", "I kicked your dear friend",],
                    answer: "I want it that way",
                    imgSrc: "../imgs/bsb.gif"
                },
                {
                    question: "Full House took place in which city?",
                    options: ["Los Angeles","Chicago","New York City","San Francisco",],
                    answer: "San Francisco",
                    imgSrc: "../imgs/fullhouse.gif"
                },
            ],
            init() {
                this.domCache();
                this.loadQuestions();
            },
            domCache() {
                this.$counter = $('#timer');
                this.$question = $('#question');
                this.$options = $('.list-group');
            },
            countdown() {
                let time = 30; // Time available for each question
                const countdown = () => {
                    time--; // Decrease time by 1
                    this.$counter.html(time);   // Display time
                }
                let quizzInterval = setInterval(countdown, 1000);   // Every second run countdown()
                // Stop countdown at time = 0; or if click on submit
                
            },
            loadQuestions() {
                //this.countdown(); //Initialize counter
                let questionCounter = 0;
                let currentQuestion = this.questionsArr[questionCounter];
                this.$question.html(currentQuestion.question); // Show first question

                for (let i = 0; i < currentQuestion.options.length; i++) {
                    this.$options.append(`<li class="options one list-group-item">${currentQuestion.options[i]}</li>`); // Show options
                }

            },
            submitQuestion() {
                
            }
                // If clicked submit
                    // Evaluate IF the value of <li> == answer
                        // correct++
                    // Else wrong++
                // If correct + wrong == questions.length FINISH!



        }
        trivia.init();
    });
    
})(jQuery); 
