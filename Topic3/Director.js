var $ = require('./jquery-3.1.1.js');
// 4-Create a Director class inside a module and set it as a dependency on the Movie module. Tip: use require.
function Director(name){
	this.name = name;
	this.quotes = [];
};
// 6-Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.
Director.prototype = {
	setName : function(name){
		this.name = name;
	},
	set : function(say,quote){
		for(var i = 0 ; i < quote.length ; i++){
			this.quotes.push(quote[i]);
		}
	},
	getQuotes : function(){
		return(this.quotes);
	},
	speak : function(){
		console.log(this.name + "says: ");
		for(var i = 0 ; i < this.quotes.length ; i++){
			console.log(this.quotes[i]);
		}
	}
};

module.exports = Director;