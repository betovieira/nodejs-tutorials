var movies = require('./movies');

var bucky = movies();
bucky.favMovie = "Chappie";

console.log("Bucky's Favorite movie is " + bucky.favMovie);