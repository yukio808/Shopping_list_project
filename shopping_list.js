// ShoppingListItem

function ShoppingListItem (name, description){
// ShoppingListItem is a class
// ShoppingListItem has a property named name
// ShoppingListItem has a property named description
// ShoppingListItem has a property named is_done
	this.name = name;
	this.description = description;
	this.is_done = is_done;
}

// ShoppingListItem has a constructor method that accepts 2 arguments, name and description
// the constructor method sets the new instances name and description properties using the arguments passed in


ShoppingListItem.prototype.addingItem = function ( name, description ){
	this.name = name;
	this.description = description;
};

// });
// ShoppingListItem has a method named check
ShoppingListItem.prototype.check = function (is_done) {
	this.is_done = true;
// calling the instance's check method will set it's is_done property to true

};
// ShoppingListItem has a method named uncheck
ShoppingListItem.prototype.uncheck = function (is_done){
	is_done = false;
// calling the instance's uncheck method will set it's is_done property to false
};
// ShoppingListItem has a method named render
ShoppingListItem.prototype.render = function(){
// calling the instance's render method will return a string formatted in html, in an
return "<li class =><span>name</span><span>name</span></li>";
// element. ex: <li class="[is_done]"><span>[name]</span> <span>[description]</span></li>

};


