//init variables, dependencies
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var basicDeck = [];
var clozeDeck = [];
//function to create Basic flashcard.
BasicCard.prototype.makeCard = function() {
	console.log("Front: " + this.front + "\nBack: " + this.back);
}
//TODO:  finish clozecard makecard function
ClozeCard.prototype.makeCard = function() {
	console.log("Front: " + this.partialText + "\nBack: "+  this.cloze);
}
function chooseType() {
	inquirer.prompt([
	{
		name: "type",
		message: "Are we making a Basic or Cloze Flashcard?"
	}	
	]).then(function(answer) {
		if(answer.type.toLowerCase() === "basic") {
				console.log("Basic it is! Please enter a Question.");
				newBasic();
			} else if(answer.type.toLowerCase() === "cloze") {
				console.log("Cloze it is! Please enter a full sentence.");
				newCloze();
			} else {
				console.log("Please choose Basic or Cloze.");
		}
	});
}
// asking user for a Basic question and answer format for Flash Card.
function newBasic() {
	inquirer.prompt([
	{
		name: "front",
		message: "Question:"
	},
	{
		name: "back",
		message: "Answer:"
	}
	]).then(function(card) {
		var newBasic = new BasicCard(card.front, card.back);
		basicDeck.push(newBasic);
		
		repeatBasic();
			 
		});	
}
//asking user if they want to make a new Basic Flashcard.  If y, then
//repeats newBasic function.  If no, ends program.
function repeatBasic() {
	inquirer.prompt([
	{
		name: "repeat",
		message: "Make another basic card? Y/N"
	}
	]).then(function(card) {
		if (card.repeat.toLowerCase() === "y") {
			newBasic();
		} else {
			for (var i = 0; i < basicDeck.length; i ++) {
				basicDeck[i].makeCard();
			}
			return;
		}
	});
};
//TODO:  Finish newCloze and repeatCloze functions
function newCloze() {
	inquirer.prompt([
	{
		name: "front",
		message: "Full sentence: "
	},
	{
		name: "back",
		message: "Cloze (Word(s) you wish to hide: "
	}
	]).then(function(card) {
		var newCloze = new ClozeCard(card.front, card.back);
		clozeDeck.push(newCloze);
		
		repeatCloze();
			 
		});	
}
function repeatCloze() {
	inquirer.prompt([
	{
		name: "repeatCloze",
		message: "Make another cloze card? Y/N"
	}
	]).then(function(card) {
		if (card.repeatCloze.toLowerCase() === "y") {
			newCloze();
		} else {
			for (var i = 0; i < clozeDeck.length; i ++) {
				clozeDeck[i].makeCard();
			}
			return;
		}
	});
}
chooseType();