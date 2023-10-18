window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		// Access the ID of the clicked element and display it in an alert
		alert("Clicked element ID: " + event.target.id);
	});
};
