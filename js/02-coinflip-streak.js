// Declare the variable coinFlip 
let coinFlip;

// Create a do-while loop
do {
  // Generate a random number (0 or 1) for the coin flip
  coinFlip = Math.floor(Math.random() * 2);

  // Use a conditional statement to check the result of the coin 
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
} while (coinFlip !== 1);
