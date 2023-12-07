// Random Number Guessing Game:
// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

const targetNumber = Math.ceil(Math.random() * 100);
console.log(targetNumber);
let inputMessage = "please input a valid number";

function generateNum() {
  let guess = "";
  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      console.log("your number is too low!");
    } else if (guess > targetNumber) {
      console.log("Your number is too high!");
    }
    return inputMessage;
  } else if (guess == targetNumber) {
    console.log(
      `Congratulations! You guessed the correct number: ${targetNumber}`
    );
  }
  return guess;
}
console.log(generateNum());
