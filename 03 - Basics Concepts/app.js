/* Objects in Java Script */
var person = {
	firstName: "Humberto",
	lastName: "Vieira de Castro",
	age: 18 
};

/* Print in console in JavaScript */
console.log(person)



/* Functions in JavaScript */
function addNumber(a , b) {
	return a + b;
}

console.log(addNumber(1, 2));

/* Functions without return defined, returns UNDEFINDED */
function withoutReturn() {
	// Without return defined
}

console.log(withoutReturn());

/* Functions in variables */
var printAnything = function() {
	console.log("Printing Anything");
}

/* The variable is equal a function type and 
	return the content of function created */
printAnything();

/* Timer, when will be executed the function
	in this case in interval of 5 seconds */
setTimeout(printAnything, 5000);