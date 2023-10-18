var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} else if (currentUser === "Juan") {
		currentUser = "Josh"; // Add Josh as the third player
	  } else {
		currentUser = "Mario"; // Cycle back to Mario
	  }

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
