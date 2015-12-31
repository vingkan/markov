var MarkovChain = require('markovchain-generate');
var nlp = require('nlp_compromise');
var fs = require('fs');

/*var pokemon = fs.readFileSync(__dirname + '/pokemon.txt', 'utf8');
var neil = fs.readFileSync(__dirname + '/neil-degrasse-tyson.txt', 'utf8');
*/

var kidjkadj = fs.readFileSync(__dirname + '/kidj-kadj.txt', 'utf8');

function markovSays(){
	var chain = new MarkovChain();
		chain.generateChain(kidjkadj);
	var output = chain.generateString();
		console.log(output);
		document.write(output);
	var processed = nlp.pos(output).to_past().text();
		console.log(processed);
}

window.markovSays = markovSays;