//random jokes application generating random jokes anytime anything is clicked on
// fetching random jokes from chuck norris api

const randomJokeBtnC = document.getElementById('random-joke-buttonC');
const randomJokeBtnD = document.getElementById('random-joke-buttonD');

const closeJoke = document.querySelector('#closeJoke')
const randomJokeContainer = document.getElementById('joke-containerJ');
const overlay = document.querySelector('.overlay');

//function to fetch joke from an API
async function fetchJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    
    const data = await res.json();
    
    console.log(data.value);

    return data.value;
};


async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    
    const data = await res.json();
    
    console.log(data.joke);

    return data.joke;
};


const laughArray = [
    './audio/baby-laughing.mp3',
    './audio/Comedy-sound-effects-of-nigeria-funny-the-world-of-nigee-things.mp3',
    './audio/Investigations.mp3',
    './audio/Jesus-Is-Lord.mp3',
    './audio/Kendrick-mayorr-Slide-Siraj-Cadet.Mp3.mp3',
    './audio/Laugh.mp3',
    './audio/Suspense-1.mp3',
    './audio/Suspense-2.mp3',
    './audio/Nollywood-Laugh.mp3',
    './audio/Nigeria-comedy-effect-sound-music.mp3',
    './audio/mixkit-small-man-crowd-laughing-423.wav',
    './audio/mixkit-laughing-children-indoors-427.wav',
    './audio/mixkit-crowd-laugh-424.wav',
    './audio/mixkit-big-crowd-laughing-460.wav',
]

const clickAudio = new Audio();

clickAudio.src = './mixkit-gun-click-1123.wav';

const laughAudio = new Audio();


//open joke on click of the randomJokeButton 
randomJokeBtnC.addEventListener('click', async () => {

    laughAudio.src = laughArray[Math.floor(Math.random()*laughArray.length)];

    let joke = await fetchJoke();

    randomJokeContainer.innerHTML = `<h6>${joke}</h6>`;
    overlay.style.display = 'flex';

    randomJokeContainer.style.backgroundColor = '#fff';
    randomJokeContainer.style.color = 'lightcoral';
    randomJokeContainer.style.borderColor = 'lightcoral';

    closeJoke.style.borderColor = 'lightcoral';
    overlay.style.backgroundImage = 'url(./images/bg1.jpg)';

    setTimeout(laughAudio.play(), 1000);
});


randomJokeBtnD.addEventListener('click', async () => {

    laughAudio.src = laughArray[Math.floor(Math.random()*laughArray.length)];
    laughAudio.loop = true;

    let joke = await fetchDadJoke();

    randomJokeContainer.innerHTML = `<h6>${joke}</h6>`;
    overlay.style.display = 'flex';
    randomJokeContainer.style.backgroundColor = '#aaa';
    randomJokeContainer.style.color = '#fff';
    randomJokeContainer.style.borderColor = '#000';

    closeJoke.style.borderColor = '#000';
    overlay.style.backgroundImage = 'url(./images/bg2.jpg)';

    setTimeout(laughAudio.play(), 1000);
});


//close the joke on click of the button.
closeJoke.addEventListener('click', () => {
    overlay.style.display = 'none';

    laughAudio.pause();
});
