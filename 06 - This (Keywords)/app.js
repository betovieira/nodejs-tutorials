/* Keyword this */

/* The second print is true, because the class of method called is Parca */
var Parca = {
	printFirstName: function() {
		console.log("My name is CrazyMãeDaFoka ");
		console.log(this === Parca);
	}
}
/* Printing */
Parca.printFirstName();

/* When the function is Global */
function doAnything() {
	console.log("Doing Anything");
	console.log(this === global);
}

doAnything();