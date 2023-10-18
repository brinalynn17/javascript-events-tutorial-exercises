window.myEventListener = function myEventListener()
{
	//your code here
	// Select the first div element
	var firstDiv = document.querySelector("div");

	// Check if a div element was found
	if (firstDiv) {
	  // Hide the first div by setting its style to "display: none"
	  firstDiv.style.display = "none";
	}
};
