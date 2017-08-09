
//Node module to export cloze-deletion flashcard.
//cloze property will contain only cloze-deleted portion of text.
module.exports = function CloseCard(text, cloze) {
	this.allText = text;
	this.cloze = cloze;	
	split = this.allText.split(cloze);
	this.partialText = "" + split[0] + "..." + split[1];
};

