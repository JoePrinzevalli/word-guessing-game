const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startOverlay = document.querySelector('.btn_reset');
let heart = document.querySelector('.tries');
const win = document.getElementsByClassName('win')
const lose = document.getElementsByClassName('lose')

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
        'chocolate chip cookies',
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
            checkLetter[i].className += ' show';
            match = checkLetter.textContent;
        } 
    }
    return match;
}


qwerty.addEventListener('click', (e) => {
    let buttonClicked = e.target;
    console.log(buttonClicked)

    if ( buttonClicked.tagName === 'BUTTON' ) {
        buttonClicked.className += ' chosen';
        buttonClicked.disabled = true;
    }
    checkLetter(buttonClicked);;

    const letterFound = checkLetter(buttonClicked)
    console.log(letterFound)
    if (letterFound === null) {
        missed++;
        console.log(missed);
        heart = document.getElementsByClassName('tries').src="images/lostHeart.png";
    }
    checkWin();
})

const checkWin = () => {
    start.className += ' win';
    start.className += ' lose';
    if (document.getElementsByClassName('letter').length === document.getElementsByClassName('show').length) {
        style.display = win;
    } else if (missed >= 5){
        style.display = lose;

    }
}







