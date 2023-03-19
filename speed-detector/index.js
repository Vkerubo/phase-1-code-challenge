// This variable stores the initial speed value.
let value = 70;
// This variable stores the number of tickets issued.
let tickets = 0;

// This while loop runs while the value is less than 130.
while (value < 130) {
  // This if statement checks if the value is less than 70.
  if (value < 70) {
    console.log("OK");
    value += 5;
  } else {
    // If the value is greater than or equal to 70, a ticket is issued and the ticket count is incremented.
    tickets++;
    console.log(`Ticket ${tickets} issued - current value: ${value}`);
    value += 5;
  }
}

// If the value is greater than or equal to 130, the license is suspended.
if (value >= 130) {
  console.log("License suspended");
}
