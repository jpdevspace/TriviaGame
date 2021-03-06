(function($) {
    // Non-DOM-ready-required code here (scope-safe)
    $(function() {
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
                    question: 'Complete the lyric "You are my fire. The one desire. Believe, when I say. _________"',
                    options: ["I ate your cheesecake","I want it that way","I'm running that way", "I kicked your dear friend",],
                    answer: "I want it that way",
                    imgSrc: "./assets/imgs/bsb.gif"
                },
                {
                    question: "Where did the TV show Full House took place?",
                    options: ["Los Angeles","Chicago","New York City","San Francisco",],
                    answer: "San Francisco",
                    imgSrc: "./assets/imgs/fullhouse.gif"
                }
            ],
            qCounter: 0, // Counter to track the current question
            rightCount: 0,  // Counter to track right guesses
            wrongCount: 0,  // Counter to track wrong guesses
            quizzInterval: 0,   // To hold the timer

            startModal() {
                $('#startGame').modal('show');  // Open the Bootrap 4 modal on start
                $('button#startNow').on('click', this.init.bind(this)); // Starts the game when the user clicks the start button
            },
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
                this.$question.on('click', '.restart', this.restart.bind(this));
            },
            countdown() {
                let time = 30; // Time available for each question
                const countdown = () => {
                    time--; // Decrease time by 1
                    if (time == 0) {
                        this.wrongCount++;
                        this.showMessage('Incorrect!');
                    }
                    this.$counter.html(time);   // Display time
                }
                this.quizzInterval = setInterval(countdown, 1000);   // Every second run countdown()

            },
            loadQuestions() {
                this.countdown(); //Initialize timer
                this.$question.html((this.questionsArr[this.qCounter]).question); // Show the current question

                for (let i = 0; i < (this.questionsArr[this.qCounter]).options.length; i++) {    // Loop through the options array from the current question
                    this.$options.append(`<li class="options one list-group-item">${(this.questionsArr[this.qCounter]).options[i]}</li>`); // Display all the possible options (they're stored in questionsArr > question > options)
                }
            },
            getUserGuess(e) {
                let btnValue = e.target.innerText;  // Answer from the <li> clicked by the user

                if(btnValue == this.questionsArr[this.qCounter].answer){    // Check if the person guessed was correct or not
                    this.rightCount++;
                    this.showMessage('Correct!');
                } else {
                    this.wrongCount++;
                    this.showMessage('Incorrect!');
                }
            },
            showMessage(guess) {
                clearInterval(this.quizzInterval); // Stop the timer
                this.$options.empty();  // Get rid of the current options
                this.$question.html(`<strong>${guess}</strong><br>The correct answer was ${this.questionsArr[this.qCounter].answer}<br><img class="img-thumbnail" src="${this.questionsArr[this.qCounter].imgSrc}">`);  // Display a message   
                
                if(this.qCounter == (this.questionsArr.length - 1)) { // Check if game over
                    this.gameOver();
                } else {
                    this.qCounter++; // Update the question counter to move on to the next question
                    setTimeout(this.loadQuestions.bind(this), 4000);    // Display message for 4 segs
                }
            },
            gameOver(){
                // If all the questions have been displayed
                this.$question.html(`
                    <h2 id="gameOver">Game Over</h2>
                    <h4>Your score<br>
                        <strong>Right: ${this.rightCount}</strong><br>
                        <strong>Wrong: ${this.wrongCount}</strong><br>
                        <button type="button" class="restart btn btn-outline-info btn-lg" data-dismiss="modal">Restart</button>
                    </h4>
                `);
            },
            restart(){
                this.qCounter = 0; 
                this.rightCount = 0;
                this.wrongCount = 0;
                this.quizzInterval = 0;
                this.loadQuestions();
            }
        }
        trivia.startModal();
    });
    
})(jQuery); 
