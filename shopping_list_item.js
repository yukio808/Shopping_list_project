// ShoppingList
// ShoppingList is a class
function ShoppingList (){
	this.items = [];
// ShoppingList has a property named items
// ShoppingList has a constructor method that initializes items as an empty Array
}
// ShoppingList has a method named addItem that accepts a single ShoppingListItem argument
ShoppingList.prototype.addItem = function (item){
	if (item instanceof ShoppingListItem){
// invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
		this.items.push(item);
// invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
	}
};
// ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument
ShoppingList.prototype.removeItem = function (item){
	if (this.item === undefined){
		delete ShoppingList.item[-1];
// invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing
	}
	if (this.item ===  ShoppingList.item){

// invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array
	}else if (!(this.item instanceof ShoppingListItem)){
		var result = this.item.indexOf(item);
		this.item.splice(res, 1);

	}
// invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (th--------


};


// ShoppingList has a method named render
ShoppingList.prototype.render = function(item) {
	return "<li class =><span>name</span><span></span></li>";

	// body...
};

// calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a

// element, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>