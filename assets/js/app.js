(function($) {
    // Non-DOM-ready-required code here (scope-safe)
    $(function() {
        //$('#startGame').modal('show');
        const trivia = {
            questionsArr: [
                {
                    question: "How many members in the Spice Girl group",
                    options: [ "3", "1", "5", "4"],
                    answer: "5",
                    imgSrc: "./assets/imgs/spicegirls.gif" // This src will be rendered from the HTML
                },
                {
                    question: "Who came first?",
                    options: ["NSYNC","PSY","The Backstreet Boys","Nirvana",],
                    answer: "Nirvana",
                    imgSrc: "./assets/imgs/nirvana.gif"
                },
                {
                    question: "In the TV show Friends: Who teaches Rachel and Phoebe about 'Unagi'?",
                    options: ["Joey","Ross","Monica","Gunther",],
                    answer: "Ross",
                    imgSrc: "./assets/imgs/ross.gif"
                
                },
                {
                    question: "Who wrote the book series Goosebumps?",
                    options: ["George R. R. Martin","Stephen King","J.K Rowling","R.L. Stine",],
                    answer: "R.L. Stine",
                    imgSrc: "./assets/imgs/goosebumps.gif"
                },
                {
                    question: "Complete the lyric 'You are my fire. The one desire. Believe when I say. _________'",
                    options: ["I ate your cheesecake","I want it that way","I'm running that way", "I kicked your dear friend",],
                    answer: "I want it that way",
                    imgSrc: "./assets/imgs/bsb.gif"
                },
                {
                    question: "Full House took place in which city?",
                    options: ["Los Angeles","Chicago","New York City","San Francisco",],
                    answer: "San Francisco",
                    imgSrc: "./assets/imgs/fullhouse.gif"
                },
            ],
            questionCounter: 0,
            rightCount: 0,
            wrongCount: 0,
            currentAnswer: "",
            currentImg: "",

            init() {
                this.domCache();
                this.eventBinding();
                this.loadQuestions();
            },
            domCache() {
                this.$counter = $('#timer');
                this.$question = $('#question');
                this.$options = $('.list-group');
            },
            eventBinding() {
                this.$options.on('click', '.options', this.getUserGuess.bind(this));
            },
            countdown() {
                let time = 30; // Time available for each question
                const countdown = () => {
                    time--; // Decrease time by 1
                    this.$counter.html(time);   // Display time
                }
                let quizzInterval = setInterval(countdown, 1000);   // Every second run countdown()
                if (time == 0) {
                    this.wrongGuess();    // Stop countdown at time = 0; or if click on submit  
                }
            },
            loadQuestions() {
                this.countdown(); //Initialize counter
                let currentQuestion = this.questionsArr[this.questionCounter];  // Get the current question
                this.$question.html(currentQuestion.question); // Show that current question

                for (let i = 0; i < currentQuestion.options.length; i++) {
                    this.$options.append(`<li class="options one list-group-item">${currentQuestion.options[i]}</li>`); // Show options
                }
            },
            getUserGuess(e) {
                let btnValue = ""; // Var that will hold the user's answer
                btnValue = e.target.innerText;  // Answer from the <li> clicked by the user
                this.checkAnswer(btnValue); 
            },
            checkAnswer(btnValue) {
                currentAnswer = this.questionsArr[this.questionCounter].answer; // Get the value of the right answer for the current question
                currentImg = this.questionsArr[this.questionCounter].imgSrc;    // Get the image path to display correct img
                
                if (btnValue == currentAnswer) {    // If the user clicked the right answer
                    this.rightAnswer();
                }
                else {  // If user clicked the wrong answer
                    this.wrongGuess();
                }
  
            },
            rightAnswer() {
                this.rightCount++;  // Increase the points
                this.$question.html(`<strong>CORRECT!</strong><br>The correct answer was ${this.currentAnswer}<br><img class="img-thumbnail" src="${this.currentImg}">`);  // Display a message
                this.$options.empty();  // Get rid of the current options
                this.questionCounter++; // Increment the questionCounter to later get the next question
                console.log(this.rightCount);
                if(this.wrongCount + this.rightCount == this.questionsArr.length) {
                    this.gameOver();
                } else {
                    setTimeout(this.loadQuestions.bind(this), 4000);    // Display message for 4 segs
                }
            },
            wrongGuess() {
                this.wrongCount++;  // Increase the points
                this.$question.html(`<strong>WRONG!</strong><br>The correct answer was ${this.currentAnswer}<br><img class="img-thumbnail" src="${this.currentImg}">`);  // Display a message
                this.$options.empty();  // Get rid of the current options
                this.questionCounter++; // Increment the questionCounter to later get the next question
                console.log(this.wrongCount);
                if(this.wrongCount + this.rightCount == this.questionsArr.length) {
                    this.gameOver();
                } else { setTimeout(this.loadQuestions.bind(this), 4000);    // Display message for 4 segs
                }
            },
            gameOver(){
                // If all the questions have been displayed
                this.$question.html(`<h2 id="gameOver">Game Over</h2><h4>Your score <br><strong>Right: ${this.rightCount}</strong><br><strong>Wrong: ${this.wrongCount}</strong></h4>`);

            }
        }
        trivia.init();
    });
    
})(jQuery); 
