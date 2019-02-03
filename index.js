
console.log("loading index.js");

import { words as wordsLots } from './words_lots';
import { words as words1000 } from './words_1000';
import { words as wordsBasic } from './words_basic';
//import markdownpdf from 'markdown-pdf';

let words_lots = undefined;
let words_1000 = undefined;
let words_basic = undefined;
let words_start = ["I would like to draw attention", "A problem we should be paying close attention to", "We have previously", "In the meantime", "In previous depictions", "A way forward would be",
	"However, when one considers", "From here on", "If you consider the implications", "This document", "Describing the future of this project", "Why one might question", 
	"Maybe we could be better off", "There are valid counterarguments we have to address", "By the time this document", "It is important to remember", "The speed of change", 
	"Voices have raised concerns about performance", "The performance implications of this technique", "Returning to the point performance", "The usability of this package"];

// helper functions
let getRandomArrayEntry = (arr) => arr[Math.floor(Math.random() * arr.length)];
let getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) ) + min;

// 
function CreateDoc(settings = {}) {

	loadFile();

	let paraCount = settings.headers.length;
	let count = 0;
	let doc = "# " + settings.title + "\n";

	while( count < paraCount )  {
		doc += "\n## " + settings.headers[count] + "\n";

		let returnQuote = getRandomNumber(10) == 5;
		if (returnQuote)
			doc += createQuote();
		else
			doc += `${createParagraph()} `;

		count++;
	}

	debugger;
	console.log(doc);

	let out = "";
	//markdownpdf().from(doc).to(out);

	console.log(out);
}

function createQuote() {
	return `> ${CreateSentence()} `;
}

function createParagraph() {
	let sentenseCount = getRandomNumber(15, 4);
	let count = 0;
	let para = "";

	while( count++ < sentenseCount )  {
		para += `${CreateSentence()} `;
	}
	return para += "\n\n";
}

function CreateSentence() {

	let wordCount = getRandomNumber(22, 10);

	// start with a nice word
	let sentence = getRandomArrayEntry(words_start);

	let count = sentence.split(' ').length;
	while( count++ < wordCount ) {
		sentence += ` ${getRandomArrayEntry(words_1000)}`;
	}
	sentence = sentence.trim() + ".";

	return sentence;

}

function loadFile() {
	 
	words_lots = wordsLots.split("\n");
	words_1000 = words1000.split("\n");
	words_basic = wordsBasic.split("\n");

}

// start
let settings = {};
settings.title = "RJP - Remote Job Processor";
settings.headers = ["Overview", "Minimum requirements", "Installing the RJP", "Upgrading RJP"];

CreateDoc(settings);