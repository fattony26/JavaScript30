// const clap = new Audio('./sounds/clap.wav');
// const hihat = new Audio('./sounds/hihat.wav');
// const kick = new Audio('./sounds/kick.wav');
// const openhat = new Audio('./sounds/openhat.wav');
// const boom = new Audio('./sounds/boom.wav');
// const ride = new Audio('./sounds/ride.wav');
// const snare = new Audio('./sounds/snare.wav');
// const tom = new Audio('./sounds/tom.wav');
// const tink = new Audio('./sounds/tink.wav');


// document.addEventListener('keydown', handleSound);

// function handleSound(e) {
//   if (e.key === "a") {
//     clap.play();
//   }
//   else if (e.key === "s") {
//     hihat.play();
//   }
//   else if (e.key === "d") {
//     kick.play();
//   }
//   else if (e.key === 'f') {
//     openhat.play();
//   }
//   else if (e.key === 'g') {
//     boom.play();
//   }
//   else if (e.key === 'h') {
//     ride.play();
//   }
//   else if (e.key === 'j') {
//     snare.play();
//   }
//   else if (e.key === 'k') {
//     tom.play();
//   }
//   else if (e.key === 'l') {
//     tink.play();
//   }

// };

// const clickSound = new Audio('./sounds/clap.wav');
// const clapDiv = document.querySelector('[data-key="65"]');
// clapDiv.addEventListener('click', playClickSound);

// function playClickSound() {
//   clickSound.play();
// }
// app.js

// // Function to play the sound associated with the key
// function playSound(keyCode) {
//   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//   const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

//   if (audio) {
//       audio.currentTime = 0; // Rewind the audio to the start to allow rapid key presses
//       audio.play();
//       keyElement.classList.add('playing'); // Add a class for styling when playing
//   }
// }

// // Function to handle keydown events
// function handleKeyDown(event) {
//   playSound(event.keyCode);
// }

// // Function to handle click events
// function handleClick(event) {
//   // Check if the clicked element has a data-key attribute
//   const keyCode = event.target.getAttribute('data-key');
  
//   if (keyCode) {
//       playSound(keyCode);
//   }
// }

// // Add keydown event listener to the document
// document.addEventListener('keydown', handleKeyDown);

// // Add click event listener to the drum kit elements
// const drumKitElements = document.querySelectorAll('.key');
// drumKitElements.forEach(element => {
//   element.addEventListener('click', handleClick);
// });

// // Function to remove the 'playing' class after the transition ends
// function removePlayingClass(event) {
//   if (event.propertyName !== 'transform') return; // Skip if it's not a 'transform' property
//   this.classList.remove('playing');
// }

// // Add transitionend event listener to each key element
// drumKitElements.forEach(element => {
//   element.addEventListener('transitionend', removePlayingClass);
// });


// app.js

// Function to play the sound associated with the key
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (audio) {
      audio.currentTime = 0; // Rewind the audio to the start to allow rapid key presses
      audio.play();
      keyElement.classList.add('playing'); // Add a class for styling when playing
  }
}

// Function to handle both keydown and click events
function handleInput(event) {
  let keyCode;

  if (event.type === 'keydown') {
      keyCode = event.keyCode;
  } else if (event.type === 'click') {
      // Check if the clicked element or its parent has a data-key attribute
      const clickedElement = event.target.closest('.key');
      if (clickedElement) {
          keyCode = clickedElement.getAttribute('data-key');
      }
  }

  if (keyCode) {
      playSound(keyCode);
  }
}

// Add keydown event listener to the document
document.addEventListener('keydown', handleInput);

// Add click event listener to the drum kit elements
const drumKitElements = document.querySelectorAll('.key');
drumKitElements.forEach(element => {
  element.addEventListener('click', handleInput);
});

// Function to remove the 'playing' class after the transition ends
function removePlayingClass(event) {
  if (event.propertyName !== 'transform') return; // Skip if it's not a 'transform' property
  this.classList.remove('playing');
}

// Add transitionend event listener to each key element
drumKitElements.forEach(element => {
  element.addEventListener('transitionend', removePlayingClass);
});
