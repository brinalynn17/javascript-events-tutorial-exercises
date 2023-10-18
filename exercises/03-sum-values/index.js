// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	// Convert the input values to numbers (assuming they contain numeric values)
	var numberA = parseFloat(stringA);
	var numberB = parseFloat(stringB);
  
	// Calculate the sum
	var sum = numberA + numberB;
  
	// Display the sum in the third input
	document.getElementById("resultNumber").value = sum;
};
