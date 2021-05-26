function ingredients(order) {
    //Menu options, along with the ingredients
    const ingredientsMenu = {
        "Classic": ["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"],
        "Forest Berry": ["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"],
        "Freezie": ["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"],
        "Greenie": ["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"],
        "Vegan Delite": ["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"],
        "Just Desserts": ["banana", "ice cream", "chocolate", "peanut", "cherry"]
    };
	const orderIng = order.split(",-") //Separate the input string  
	const omit = orderIng.slice(1) //Return the ingredients which shall be remove, as an array
	const smoothieIng = ingredientsMenu[orderIng[0]] //Select the correct smoothie in the list

	omit.forEach((ingredient) => { //Iterates each removable ingredient and eliminate that ingredient from the menu
		const index = smoothieIng.indexOf(ingredient)
		if (index >= 0) {
			smoothieIng.splice(index, 1)
		}
	});
  
	return smoothieIng.sort().toString(); // return the menu without the omit ingredients and arrange the list in alphabetical order
}
