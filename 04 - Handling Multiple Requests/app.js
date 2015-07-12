/* Requests and Callbacks */

/* This function call the next client */
function placeAnOrder(orderNumber) {
	/* Print the order costumer */
	console.log("Costumer Order", orderNumber);

	/* This function will be recieve a anony function.
		After the function cookAndDeliveryFood finish, this method
			will be executed */
	cookAndDeliveryFood(function() {
		console.log("Delivery Food order: ", orderNumber);
		
	});
}


/* In this function, the parameter recieved (could be a anonymous function too),
	your return will appear in 5 seconds  */
function cookAndDeliveryFood(callback) {
	/* The setTimeout works this way:
		- Is not like a stop the program and return the data
		- The program continue working
		- setTimeout gets the maximum of data requests and return all that it can 
			and return for users
	*/
	setTimeout(callback, 5000);
}

/* Simulate the users of web request */
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

