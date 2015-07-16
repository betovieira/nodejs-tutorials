/* importing modules */
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.use(bodyParser.json());
app.use(methodOverride());

/* Creating the database */
mongoose.connect('mongodb://localhost/restful');

//Modeling the table
var ProductSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get','put', 'post', 'delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log("Server is running ....");