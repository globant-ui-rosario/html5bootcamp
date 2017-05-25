//Prototype Design Pattern
var director = require('./Director.js');

function Movie() {
	this.attr = new Map();
};

Movie.prototype = {
	set :  function (key, value){
		   this.attr.set(key, value);	    	
    },
	get : function(key){
		return(this.attr.get(key));
	},
    stop : function(){
    	console.log(this.get("title") + " Stopped");
	},
	play : function(){
		console.log("Playing " + this.get("title"));
	},
    showAttributes : function(){
		for (var [key, value] of this.attr) {
		  console.log(key + " = " + value);
		}
    }
};

// 3-Create the same Movie class as in the previous practice, but inside a CommonJS module. Tip: use module.exports.
module.exports = Movie;
 