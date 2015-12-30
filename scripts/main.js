var MarkovChain = require('markovchain-generate');
var fs = require('fs');

var pokemon = fs.readFileSync(__dirname + '/pokemon.txt', 'utf8');
//console.log(pokemon);

var neil = fs.readFileSync(__dirname + '/neil-degrasse-tyson.txt', 'utf8');
//console.log(neil);

var chain = new MarkovChain();
	chain.generateChain(neil);
var output = chain.generateString();
	console.log(output);

	document.write(output);

	//node_modules/.bin/watchify