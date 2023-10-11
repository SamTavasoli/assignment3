const heightOfTriangle = 7;

// Loop through each row
for (let i = 1; i <= heightOfTriangle; i++) {
  let row = '';

  // Add '#' characters 
  for (let j = 0; j < i; j++) {
    row += '#';
  }

  // Display the row in the console
  console.log(row);
}