window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	// Get a reference to the green button by its ID
	var greenButton = document.getElementById("theGreen");

	// Define the listener function for the green button
	function greenButtonClickListener() {
	  alert("woohoo!");
	}

//the listener function here
 // Add the event listener to the green button
 greenButton.addEventListener("click", greenButtonClickListener);
};