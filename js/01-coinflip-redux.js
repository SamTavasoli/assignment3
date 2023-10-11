// 1- Begin your application by declaring a variable called coinFlip. 
// Do not assign the variable a number just yet.
let coinFlip;

// 2- Create a for loop that loops a certain amount of times. 
// The amount of times that the for loop executes will be collected from the user via a prompt.
const numOfFlips = parseInt(prompt("Enter the number of times to flip the coin:"));

// Check if numOfFlips is a valid number
if (isNaN(numOfFlips)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  // Loop the specified number of times(numOfFiles)
  for (let i = 0; i < numOfFlips; i++) {
    // Generate a random number (0 or 1) for the coin flip
    coinFlip = Math.floor(Math.random() * 2);

    // Use a conditional statement to determine the result and display it
    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
}
