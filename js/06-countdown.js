const startingNumber = parseInt(prompt("Enter a number to start the countdown:"));

// Check if the input is a valid number
if (!isNaN(startingNumber)) {
  // Use a for loop to count down from the starting number to 0
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
