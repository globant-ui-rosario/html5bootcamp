var Director = require('./Director.js');
var Movie = require('./Movie.js');
var $ = require('./jquery-3.1.1.js');

// 5-Create a movies.js file using browserify. Add that script to an index.html. Check that it works opening it in the browser.
//7-Add a Director to a Movie. Implement the following API:

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set("quotes", ["Cast is everything.", "Do what ..."]);
alien.set("director", ridleyScott);
alien.get("director").speak(); //output: Ridley Scott says: 'Cast is...'
quotes = ridleyScott.getQuotes();

//--------------------- jquery ------------------------
//2-Using jQuery show Director quotes.

$(document).ready(function(){
	for(var i = 0 ; i < quotes.length ; i++){
		$('#dialogQuotes').append('<div>' + quotes[i] + '</div>');
	}
});
