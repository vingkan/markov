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

/*var nlp = require('nlp_compromise');

var processed = nlp.pos(output).to_past().text();
	console.log(processed);*/