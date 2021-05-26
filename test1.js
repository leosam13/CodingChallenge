function maskify(creditCard) {
	if (creditCard.length >= 6) { //Check if the input is greater than 6
		let result = '';
		return creditCard.split('').reduce((acc, cur, i) => { //Iterates every element of the string
			const check = /\d/;
			if (creditCard.length - i > 4) {
				if (check.test(cur) == false) { //Check if the value is numeric
					result += cur;
				} else if (i == 0) { //Skip the first element of the string and leave the original
					result += cur;
				} else {
					result += '#'; //Change the original value to # value
				}
			} else {
				result += cur; //Leave the original value for the last 4 digits
			}
			return result; //The function returns the masked CC
		}, '');
	} else {
		return creditCard; //If the value is less than 6, the function returns the same string
	}
}