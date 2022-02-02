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
        'treehouse',
        'movie',
        'video games',
        'italy',
        'magic'
];
//This function gets a random string from the array 'phrases'
const getRandomPhraseAsArray = (arr) => {
    const arrayLength = arr.length;
    let randomPhrase = '';
    randomPhrase = arr[Math.floor(Math.random() * arrayLength)];

    const splitPhrase = randomPhrase.split('');
    return splitPhrase;
}
console.log(getRandomPhraseAsArray(phrases));

