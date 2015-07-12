/* Core Modules 
	- Are the modules available in node.js language system
	- Does not need of './' in require
*/

/* Writing in file */
var fs = require('fs');

fs.writeFileSync("corn.txt", "Text writing in line!");
console.log(fs.readFileSync("corn.txt").toString());

/* Path functions */

var path = require('path');
var websiteHome = 'Desktop/Bucky//thenewboston/index.html'
var websiteAbout = 'Desktop/Bucky/thenewboston/about.html'

/* Printing using path module */
console.log(path.normalize(websiteHome)); // Change the string for correct format of direct
console.log(path.dirname(websiteAbout));  // Show the path without name of file 
console.log(path.basename(websiteAbout)); // Show the name of file
console.log(path.extname(websiteAbout));  // Show the extention name

/* Information of this file */
console.log(__dirname);   // Directory of this file 'app.js' 
console.log(__filename);  // Directory + name of this file


/* Print in interval of 2 seconds */
setInterval(function() {
	console.log('Printando');
}, 2000);



