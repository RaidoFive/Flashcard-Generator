//Node module to export basic flashcard constructor
//front argument would be equal to text viewed on front of card.
//back argument would be equal to text viewed on back of card.
module.exports = function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

