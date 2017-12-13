(function($) {
    // Non-DOM-ready-required code here (scope-safe)
    $(function() {
        //$('#startGame').modal('show');
        const trivia = {
            questions: [
                {
                    question: "Who are the original members of the Spice Girl group",
                    options: [ "Melanie Brown, Melanie Chisholm, Emma Bunton, Geri Halliwell and Victoria Adams",
                                "Melanie Chisholm, Melanie Bunton, Emma Brown, Geri Adams and Victoria Halliwell",
                                "Nicole Scherzinger, Carmit Bachar, Ashley Roberts, Jessica Sutta, Melody Thornton, and Kimberly Wyatt",
                                "AJ McLean, Howie D., Nick Carter, Kevin Richardson, and Brian Littrell",],
                    answer: "Melanie Brown, Melanie Chisholm, Emma Bunton, Geri Halliwell and Victoria Adams",
                    imgSrc: "../imgs/spicegirls.gif"
                },
                {
                    question: "Who came first?",
                    options: ["NSYNC","PSY","The Backstreet Boys","Nirvana",],
                    answer: "Nirvana",
                    imgSrc: "../imgs/nirvana.gif"
                },
                {
                    question: "Who teaches Rachel and Phoebe about 'Unagi'?",
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
        }
    });

})(jQuery); 
