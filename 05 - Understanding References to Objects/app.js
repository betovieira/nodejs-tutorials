/* References */

var Parca = {
	favFood: "Macarrão",
	favMovie: "Focus"
}

var FriendOfParca = Parca;
FriendOfParca.favFood = "Feijão doido";


/* Changing the atributes FriendOfParca, will be changing
	atributes of Parca, because FriendOfParca is a reference copy
	of Parca, so the content is the same */
console.log("Parca Food: ", Parca.favFood);




/* Comparing types */

/* This compare just the values
	because that, its true  */
console.log(19 == '19');

/* This compare the values and the type
	bacause this, its false */
console.log(19 === '19');


