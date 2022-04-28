const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startOverlay = document.querySelector('a');
let heart = document.querySelectorAll('.tries img');
const win = document.getElementsByClassName('win')
const lose = document.getElementsByClassName('lose')
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
let startScreen = document.querySelector('.start');
const title = document.querySelector('.title');
// use this as refesh button
const refreshButton = document.createElement('button');





//This changes the screen overlay to the game screen from the start screen
addEventListener('click', (e) => {              // do i need to add an element before addEventListener, like 'startOverlay.addEventListener
    const start = e.target.parentNode;
    if (start.className === 'start') {      
         start.style.display = 'none';
    }
    }); 

const phrases = [
        'tree house',
        'new york',
        'video games',
        'zeus',
        'iron man'
];
//This function gets a random string from the array 'phrases', and splits the phrase and returns each letter indivually in an array.
const getRandomPhraseAsArray = arr => {
    const arrayLength = arr.length;
    let randomPhrase = '';
    randomPhrase = arr[Math.floor(Math.random() * arrayLength)];

    const splitPhrase = randomPhrase.split('');
    return splitPhrase;
}
const phraseArray = getRandomPhraseAsArray(phrases);

// This function creates an li element and appends it the ul element with the parent node of div(id = phrase). It then sets the content of the newly created list item to one of the letters prudced in the phrasearray variable.
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < phraseArray.length; i++) {
        let character = phraseArray[i];
        let item = document.createElement('li');
        item.innerHTML = character;
        const list = document.querySelector('ul')
        list.append(item);
        if(character.indexOf(' ') >= 0) {
            item.className = 'space';
        } else {
            item.className = 'letter';
        }
    }
}
addPhraseToDisplay(phraseArray);


// This function will be used in the 'qwerty.addEventListener' to see if the button clicked matches a letter from the hidden phrase

const checkLetter = button => {
    const checkLetter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if ( button.textContent === checkLetter[i].textContent ) {
            checkLetter[i].classList.add('show');
            match = checkLetter.textContent;
        } 
    }
    return match;
}

// This event listneer puts the class 'chosen' on the letter selcted from the keyboard and changes the full heart to the the lost heart if the user misses a letter
qwerty.addEventListener('click', (e) => {
    let buttonClicked = e.target;

    if ( buttonClicked.tagName === 'BUTTON' ) {
        buttonClicked.className += ' chosen';
        buttonClicked.disabled = true;
        checkLetter(buttonClicked);

        const letterFound = checkLetter(buttonClicked)
        if (letterFound === null) {
            heart[missed].src="images/lostHeart.png";
            missed++;
         }
    }
    
    checkWin();
})

// this function checks to see if user 'won' or 'lost', then displays the appororiate screen
const checkWin = () => {
    if (letter.length === show.length) {
        startScreen.className += ' win';
        startScreen.style.display = 'flex';
        title.innerHTML = `<h2>You Won! Congratulations!</h2>`;
        startOverlay.innerHTML = `<p>Try to beat your score!</p>`;
        startScreen.append(refreshButton);
        refreshButton.innerHTML = 'Click here to play again';
        refreshButton.className = 'refresh-win';
    } else if (missed >= 5) {
        startScreen.className += ' lose';
        startScreen.style.display = 'flex';
        title.innerHTML = `<h2>Oh No, You lost!</h2>`;
        startOverlay.innerHTML = `<p>Try Again!</p>`;
        startScreen.append(refreshButton);
        refreshButton.innerHTML = 'Click here to play again';
        refreshButton.className = 'refresh-lose';
    }
}

// When user clicks button, page refrehses allowing user to play the game again
refreshButton.addEventListener('click', reloadPage = () => {
    reload = location.reload();
    return reload;
} );













