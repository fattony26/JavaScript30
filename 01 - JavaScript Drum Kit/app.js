const clap = new Audio('./sounds/clap.wav');
const hihat = new Audio('./sounds/hihat.wav');
const kick = new Audio('./sounds/kick.wav');
const openhat = new Audio('./sounds/openhat.wav');
const boom = new Audio('./sounds/boom.wav');
const ride = new Audio('./sounds/ride.wav');
const snare = new Audio('./sounds/snare.wav');
const tom = new Audio('./sounds/tom.wav');
const tink = new Audio('./sounds/tink.wav');


document.addEventListener('keydown', handleSound);

function handleSound(e) {
  if (e.key === "a") {
    clap.play();
  }
  else if (e.key === "s") {
    hihat.play();
  }
  else if (e.key === "d") {
    kick.play();
  }
  else if (e.key === 'f') {
    openhat.play();
  }
  else if (e.key === 'g') {
    boom.play();
  }
  else if (e.key === 'h') {
    ride.play();
  }
  else if (e.key === 'j') {
    snare.play();
  }
  else if (e.key === 'k') {
    tom.play();
  }
  else if (e.key === 'l') {
    tink.play();
  }

};

// const clickSound = new Audio('./sounds/clap.wav');
// const clapDiv = document.querySelector('[data-key="65"]');
// clapDiv.addEventListener('click', playClickSound);

// function playClickSound() {
//   clickSound.play();
// }

function handleKeyEvent(event) {
  const keyClicked = event.key;
  const keyElement = document.querySelector('[data-key="65"]');
  if (keyElement) {
    playSound(keyElement);
  }
}

function playSound(element) {
  const soundPath = element.getAttribute('data-sound');

  if (soundPath) {
    const audio = new Audio('./sounds/clap.wav');
    audio.play();
  }
}
document.addEventListener('click', handleKeyEvent);