// Define the text to type
var text = "The quick brown fox jumps over the lazy dog.";

// Get the text and input elements
var textElement = document.getElementById("text");
var inputElement = document.getElementById("input");

// Start the game
function start() {
  // Set the text to type
  textElement.textContent = text;

  // Focus on the input element
  inputElement.focus();

  // Start the timer
  var startTime = Date.now();
  setInterval(function() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("time").textContent = elapsedTime;
    var speed = Math.floor((inputElement.value.split(" ").length / elapsedTime) * 60);
    document.getElementById("speed").textContent = speed;
  }, 1000);
}

// Reset the game
function reset() {
  // Clear the input element
  inputElement.value = "";

  // Reset the timer and speed
  document.getElementById("time").textContent = 0;
  document.getElementById("speed").textContent = 0;

  // Remove the text to type
  textElement.textContent = "";
}
