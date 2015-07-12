var movies = require('./movies');

var emily = movies();
emily.favMovie = "Focus";

console.log("Emily's Favorite movie is " + emily.favMovie);