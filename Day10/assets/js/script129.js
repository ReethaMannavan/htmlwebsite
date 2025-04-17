//  JS129. Play a sound when a button is clicked. 

const btn = document.getElementById('btn');

function playSound() {
    var audio = document.getElementById('audio');
    audio.play();
}

btn.addEventListener('click',playSound)