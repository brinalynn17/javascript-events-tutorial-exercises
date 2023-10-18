//Declare your function here
// Get a reference to the button element by its ID
const button = document.getElementById("hello");
// Define the event listener function
function showMessage() {
	alert("Hello World");
}

// Add the event listener to the button
button.addEventListener("click", showMessage);
