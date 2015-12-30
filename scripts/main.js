var MarkovChain = require('markovchain-generate');

var chain = new MarkovChain();

var text = "I wanna be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each pokemon to understand The power that's inside Pokemon! Gotta catch 'em all! It's you and me I know it's my destiny, Pokemon! Oh you're my best friend In a world we must defend Pokemon! A heart so true Our courage will pull us through, You teach me and I'll teach you, Pokemon! Gotta catch'em all Every challenge along the way With courage I will face. I will battle every day To claim my rightful place. Come with me, The time is right, There's no better team. Arm in arm we'll win the fight! It's always been our dream!";

	chain.generateChain(text);

var output = chain.generateString();
	console.log(output);

var fs = require('fs');