
//typeof name = string
// typeof calories = num,
// typeof vegan = boolean
// typeof glutenFree = boolean
// typeof citrusFree = boolean
//constructor for FoodItem
var itemsArray = [];
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	this.foodArray = function foodArray(){
		itemsArray.push(this);
		return itemsArray;
	}
};
	
	
//toString method to return FoodItems properties in readable format
FoodItem.prototype.toString = function(){
var stringFood = "Food Item: " + this.name + " Calories:" + this.calories + 
" Vegan: " + this.vegan + " Gluten Free: " + this.glutenFree + " Citrus Free: " + this.citrusFree;
return stringFood;
};


//instantiation of object 
var bread = new FoodItem("Bread", 210, true, false, false);
bread.toString();
console.log(bread.toString());

var salad = new FoodItem("salad", 300, false, true, true);
salad.toString();
console.log(salad.toString());

var chocolate = new FoodItem("chocolate", 400, false, false, true);
chocolate.toString();
console.log(chocolate.toString());//toString method to return FoodItems properties in readable format

var glutenFreeCookie = new FoodItem("glutenfree", 400, true, true, true);


//Constructors for objects 

// typeof name = string
// typeof description = string
// typeof items = array
var Drink = function(name, description, items){
	this.name = name;
	this.description = description;
	this.items = items;
};
// typeof name = string
// typeof description = string
// typeof price = num
// typeof items = array
var Plate = function(name, description, price, items){
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
};
// typeof plates = num
var Order = function(plates){
	this.plates = plates;
};
// typeof num
var Menu = function(plates){
	this.plates = plates;
};
// typeof name = string
// typeof description = string
// typeof menu = string 
var Restaurant = function (name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};
// typeof dietaryPreference = string 
var Customer = function (dietaryPreference){
	this.dietaryPreference = dietaryPreference;
};


// Order.prototype.toString = function(){
// 	var stringOrder = "The contents of the order are: " + this.plates;
// 	return stringOrder;
// };

// Created plates and items for testing 
var someItems = [bread, salad];
var plate1 = new Plate ("plate1", "delicious", 5, someItems);
plate1.toString();
console.log(plate1.toString());

var plate2 = new Plate("plate2", "terrible", 10, salad);

var plate3 = new Plate ("plate3", "the best", 30, chocolate);

var allGlutenFree = [glutenFreeCookie, salad];

var glutenFreePlate = new Plate ("glutenFree Plate", "no gluten!", 500, allGlutenFree);

//3. toString method for objects
Plate.prototype.toString = function(){
	var stringPlate = "Plate Name: " + this.name + 
	" Description: " + this.description + " Price: " + this.price + " Items: " + this.items;// loop thru items and concatenate item names individually
	return stringPlate;
}

Order.prototype.toString = function(){
	var orderString = "Order: " + this.plates;
	return orderString;
}

Drink.prototype.toString = function(){
	var stringDrink = "Drink name: " + this.name + " description: " + this.description + " items: " + this.items.name;
	return stringDrink;
}

Menu.prototype.toString = function(){
	var stringMenu = "Menu: " + this.plates;
	return stringMenu;
}

Restaurant.prototype.toString = function(){
	var stringRestaurant = "Restaurant: " + this.name + "description: " + this.description + " menu: " + this.menu;
	return stringRestaurant;
}

Customer.prototype.toString = function(){
	var stringCustomer = "Dietary Preference: " + this.dietaryPreference;
	return stringCustomer;
}



var allPlates = [plate1, plate2, plate3];
var hungry = new Order(allPlates);
console.log(hungry);
hungry.toString();
console.log(hungry.toString());

//4. Add methods to Plate object to determine if all food items are within dietary restrictions
//Is it Vegan check?
Plate.prototype.isVegan = function(){
	for (i= 0; i<=this.items.length; i++){
		if (this.items[i].vegan === false){
			return "not vegan";
		}
		else 
			return "vegan!";	
	}

};
glutenFreePlate.isVegan();

console.log(glutenFreePlate.isVegan());

// Plate.prototype.isVegan = function isItVegan(){
// 	for (i= 0; i<=this.items.length; i++){
// 		if (this.items.vegan === true){
// 			return "not vegan";
// 		}
// 		else 
// 			return "vegan!";	
// 	}

// };



//Is it Gluten Free check
Plate.prototype.isGlutenFree = function(){
	for (i= 0; i<=this.items.length; i++){
		if (this.items[i].glutenFree === false){
			return "not gluten free";
		}
		else 
			return "gluten free!";	
	}
};
glutenFreePlate.isGlutenFree();

console.log(glutenFreePlate.isGlutenFree());
//Is it citrus free check?
Plate.prototype.isCitrusFree = function(){
	for (i= 0; i<=this.items.length; i++){
		if (this.items[i].citrusFree === false){
			return "not citrus free";
		}
		else 
			return "citrus free!";	
	}
};


glutenFreePlate.isCitrusFree();

console.log(glutenFreePlate.isCitrusFree());

plate1.isCitrusFree();

console.log(plate1.isCitrusFree());

//5. Instantiate different Plates

var cheese = new FoodItem("cheese", 300, false, false, true);
var chicken = new FoodItem("chicken", 250, false, false, true);
var beans = new FoodItem("beans", 120, true, true, true);
var peppers = new FoodItem("peppers", 50, true, true, true);
var burritoItems = [cheese, chicken, beans, peppers];
var burritoPlate = new Plate ("Burrito Plate", "the best burrito in town", 12.50, burritoItems);
console.log(burritoItems[1].name);
burritoPlate.toString();
console.log(burritoPlate.toString());


