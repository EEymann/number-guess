const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;

//Keep track of guess attemps
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game

for (let i = 1; i <= 10; i++ ) {
 let guess = prompt("Please guess a number from 1 to 10.");
  attempts++;
  // Terimate loop if the user guesses the number
  if ( parseInt(guess) === randomNumber) {
    message = `It took you ${i} tries to guess the number ${randomNumber}.`
    break;
  } else {
    message = `You did not guess the number. The number was ${randomNumber}.`;
  }
}

main.innerHTML = `<h1>${message}</h1>`;



//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number
