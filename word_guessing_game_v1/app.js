const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startOverlay = document.querySelector('.btn_reset')

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




const checkLetter = button => {
    const checkLetter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if ( button.textContent === checkLetter[i].textContent ) {
            checkLetter.className = 'show';
            match = checkLetter.textContent;
        } 
    }
    return match;
}
console.log(checkLetter(checkLetter))





qwerty.addEventListener('click', (e) => {
    clickedButton= e.target.parentNode;
    if (clickedButton = 'BUTTON') {
        button.className = 'chosen';
    }
    checkLetter(e.target)
    
})
console.log(checkLetter(e.target))





