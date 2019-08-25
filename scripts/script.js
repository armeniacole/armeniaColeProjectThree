const randomKiwi = {};

// array of objects with words and definitions as keys.

randomKiwi.dataBase = [
    {
        word: `Togs`,
        definition: `<h3>You wear them swimming!</h3><p>Togs is the collective term for all forms of swim-wear (board shorts, bikinis, one-piece, speedos ect).</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="true"><label for="q1">Clothes for swimming.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">A pair of slippers.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">A local shellfish.</label>`

    },
    {
        word: `Jandals`,
        definition: `<h3>Flip-flops!</h3><p>The origin of this word is "Japanese Sandals"</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">"Goodbye!"</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="true"><label for="q2">Flip-flops.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">A type of candy.</label>`
    },
    {
        word: `Dairy`,
        definition: `<h3>Convenience Store!</h3><p>Usually a local corner store, will sell essentials and treats.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">A group of cows.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">An ice-cream.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="true"><label for="q3">A convenience store.</label>`
    },
    {
        word: `Wop Wops`,
        definition: `<h3>The middle of no-where!</h3><p>The wop wops is far away from or not surrounded by human activity. Could mean both rural or wild areas</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="true"><label for="q1">The middle of nowhere.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">When you discipline a child.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">A type of candy.</label>`

    },
    {
        word: `Kiwi`,
        definition: `<h3>NOT THE FRUIT!</h3><p>1) A Kiwi refers to the flightless bird that is the national symbol of New Zealand.</p><p>2) Someone from New Zealand is also known as a Kiwi. For the fruit please see 'Kiwi-fruit'.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">The bird, the fruit and a New Zealander.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">The fruit and the bird.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="true"><label for="q3">A bird and a New Zealander.</label>`
    },
    {
        word: `Bach`,
        definition: `<h3>A little house for vacations!</h3><p>Similar to a Canadian "Cottage", a Bach is a small property usually near the beach to enjoy in summer.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">A bachelor party.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="true"><label for="q2">A small vacation home.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">Someone who is obsessed with music.</label>`
    },
    {
        word: `Tramping`,
        definition: `<h3>Hiking!</h3><p>Going tramping is a popular activity in New Zealand.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">To have a party in the woods.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="true"><label for="q2">To walk in a non urban area.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">To be living rough.</label>`
    },
    {
        word: `Yarn`,
        definition: `<h3>Telling a story!</h3><p>Chatting with someone, specifically the act of telling a story would be considered "Having a yarn".</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">A boring person.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">To heard lambs.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="true"><label for="q3">To tell a long winded story.</label>`
    },
    {
        word: `Cuz / Cuzzie`,
        definition: `<h3>Cousin / Close Friend</h3><p>Cuz or Cuzzie is short for Cousin but can mean anyone close to you that is like family.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">Your cousin.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">A close friend.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="true"><label for="q3">All of the above.</label>`

    },
    {
        word: `Munted`,
        definition: `<h3>Broken!</h3><p>If something is "Munted" it could also be described as broken, ruined, damaged, or fucked up.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="true"><label for="q1">Something that is broken.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">To be confused.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">To be drunk.</label>`
    },
    {
        word: `Stubbie`,
        definition: `<h3>Small bottle of beer!</h3><p>A stubbie is the nickname for a 330ml bottle of beer.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">A short pair of pants.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">To be short.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="true"><label for="q3">Bottle of beer.</label>`
    },
    {
        word: `Stubbies`,
        definition: `<h3>Short shorts!</h3><p>Stubbies are a pair of very short shorts originally for men. They are similar to a rugby style short and are typically of a sturdy material.</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="false"><label for="q1">Ticket stub collectors.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="true"><label for="q2">Very short shorts.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">Toes.</label>`
    },
    {
        word: `Slash`,
        definition: `<h3>To go pee!</h3><p>Slang word used to excuse yourself to the bathroom in a party setting. "I'm going to take a slash".</p>`,
        q1: `<input type="radio" name="quest" id="q1" value="true"><label for="q1">Going to the bathroom.</label>`,
        q2: `<input type="radio" name="quest" id="q2" value="false"><label for="q2">To cut school.</label>`,
        q3: `<input type="radio" name="quest" id="q3" value="false"><label for="q3">To take a nap.</label>`
    },
]


// Function for generating a random number 

randomKiwi.randomItemFromData = function(array) {
    const randomNumber = Math.floor(Math.random() * this.dataBase.length);
    return array[randomNumber];
}

let userClick = '';

// listen for user event on button click for main button
randomKiwi.buttonClick = function(){
    $('.mainButton').on('submit', function(event) {
        event.preventDefault();
 
        // generate a random number and use get a index of the array
        userClick = randomKiwi.randomItemFromData(randomKiwi.dataBase);

        
        // display matching word and definition to user by adding to html
        $('.results').html(`<h2>${userClick.word}</h2>`);
        $('.quiz').html(`<fieldset><legend>What do you think ${userClick.word} means?</legend>${userClick.q1} ${userClick.q2} ${userClick.q3}</fieldset>
        <div class="quizButton button">
                <label class="visuallyHidden" for="quizButton">Click the button to submit your answer!</label>
                <input type="submit" class="submit" value="Submit!" id="quizButton" data-hash="#final">
        </div>`);
        // Clear the content in bottom section generated by previous click.
        $('.final').html(``);
        randomKiwi.smoothScroll('.quiz');
    });    
}

randomKiwi.smoothScroll = function (clickedButton) {
    $(clickedButton).on('submit', function (event) {
        // store content of data hash (which refers to the new location)
        const resultsPage = $(`${clickedButton} .submit`).data('hash');

        // if there is something in the hash prevent default behavior and then
        if (resultsPage !== '') {
            event.preventDefault();
            //  and then animate the change in locations to the new location
            $('html, body').animate({
                scrollTop: $(resultsPage).offset().top
            }, 600, function () {
                window.location.hash = "resultsPage";
            });
        }

    });
}

// fix for page refresh to move to top
randomKiwi.resetHash = function () {
    window.location.hash = "";
}

// event listener for quiz
randomKiwi.quizClick = function(){
    $('.quiz').on("submit", function(event){
        event.preventDefault();
        // console.log("is this working");

        const userAnswer = $('input[name=quest]:checked').val();
        // console.log(userAnswer);

        if (userAnswer === 'true') {
            $('.final').html(`<p>You were <span class="RW">right</span>, heres the definition:</p><p>${userClick.definition}</p>
            <div class="topButton button">
                <label class="visuallyHidden" for="quizButton">Click the button to go back to top!</label>
                <input type="submit" class="submit" value="Another Kiwi!" id="quizButton" data-hash="#top">
            </div>`)
            randomKiwi.smoothScroll('.final');
        } else if (userAnswer === 'false'){
            $('.final').html(`<p>Sorry thats <span class="RW">wrong</span>, heres the definition:</p><p>${userClick.definition}</p>
            <div class="topButton button">
                <label class="visuallyHidden" for="quizButton">Click the button to go back to top!</label>
                <input type="submit" class="submit" value="Another Kiwi!" id="quizButton" data-hash="#top">
            </div>`)
            randomKiwi.smoothScroll('.final');
        } else {
            $('.final').html(`<p>Please choose an answer.</p>
            <div class="topButton button">
                <label class="visuallyHidden" for="quizButton">Click the button to go back to quiz!</label>
                <input type="submit" class="submit" value="Back to Quiz" id="quizButton" data-hash="#results">
            </div>`)
            randomKiwi.smoothScroll('.final');
        }
    });

}

$(function(){
    // $(window).scrollTop(0);
    randomKiwi.resetHash();
    randomKiwi.smoothScroll('.mainButton');
    randomKiwi.buttonClick();
    randomKiwi.quizClick();
});
