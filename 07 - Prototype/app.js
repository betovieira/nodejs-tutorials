/* Creating objects */
function User() {
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		this.life -= 1;

		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

/* Instanciate objects */
var Parca1 = new User();
var Parca2 = new User();

/* Changing the atribute name of objects */
Parca1.name = "Beto";
Parca2.name = "Sidney";

/* Call method of class */
Parca1.giveLife(Parca2);

/* Printing content of objects */
console.log(Parca1);
console.log(Parca2);

/* Prototyping */
/* You can add a functions in all objects */
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
};

// Calling method newly created
Parca1.uppercut(Parca2);

/* Printing content of objects */
console.log(Parca1);
console.log(Parca2);

/* You can add a atributes in all objects */
User.prototype.magic = 60;

console.log("1: " + Parca1.magic);
console.log("2: " + Parca2.magic);



