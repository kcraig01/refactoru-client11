
//PART1.

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
console.log(bread.toString());

var salad = new FoodItem("salad", 300, false, true, true);
console.log(salad.toString());

var chocolate = new FoodItem("chocolate", 400, false, false, true);
console.log(chocolate.toString());

var glutenFreeCookie = new FoodItem("glutenfree", 400, true, true, true);

//PART 2.
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
	amIVegan = undefined;
	amIGluten = undefined;
	amICitrus = undefined;
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

// Created plates and items for testing 
var someItems = [bread, salad];

var plate1 = new Plate ("plate1", "delicious", 5, someItems);

var plate2 = new Plate("plate2", "terrible", 10, bread);

var plate3 = new Plate ("plate3", "the best", 30, chocolate);

var allGlutenFree = [glutenFreeCookie, salad];
var glutenFreePlate = new Plate ("glutenFree Plate", "no gluten!", 500, allGlutenFree);

var isVegan = [glutenFreeCookie, bread];
var isVeganPlate = new Plate ("vegan", "vegan", 400, isVegan);

var notVegan = [bread, salad];
var notVeganPlate = new Plate ("not vegan free", "no vegan", 300, notVegan);

var notGlutenFree = [chocolate, salad];
var notGlutenFreePlate = new Plate ("not gluten free", "no gluten free", 300, notGlutenFree);

var glutenFreeItems = [glutenFreeCookie, salad];
var glutenFreePlate2 = new Plate ("gluten free", "gluten free", 300, glutenFreeItems);

var allPlates = [plate1, plate2, plate3];
var hungry = new Order(allPlates);

//3. toString method for objects
Plate.prototype.toString = function(){
	var stringPlate = "Plate Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Items: ";
	for (i = 0; i<this.items.length; i++){
	stringPlate+= this.items[i].name+ " ";
	}
	return stringPlate;	
}


Order.prototype.toString = function(){
	var orderString = "Order: " + this.plates;
	return orderString;
}

Drink.prototype.toString = function(){
	var stringDrink = "Drink name: " + this.name + " description: " + this.description + " items: " ;
	for (i = 0; i<this.items.length; i++){
	stringDrink+= this.items[i].name+ " ";
		// stringPlate = stringPlate + 'this[i].name';
	}
	return stringDrink;
}

Menu.prototype.toString = function(){
	var stringMenu = " Menu: " + this.plates;
	return stringMenu;
}

Restaurant.prototype.toString = function(){
	var stringRestaurant = "Restaurant: " + this.name + " Description: " + this.description + this.menu;
	return stringRestaurant;
}

Customer.prototype.toString = function(){
	var stringCustomer = "Dietary Preference: " + this.dietaryPreference;
	return stringCustomer;
}


//4. Add methods to Plate object to determine if all food items are within dietary restrictions
//Is it Vegan check?

Plate.prototype.isVegan = function(){
	for (i= 0; i<this.items.length; i++){
		// amIVegan = true;
		if (this.items[i].vegan === false){
			amIVegan = false; 
			return amIVegan;
			// return false;
		}
	}
	if (typeof amIVegan ==="undefined"){
		amIVegan = true;
		return amIVegan
		// return true;
	}
};

isVeganPlate.isVegan();
console.log("Am I vegan?:", amIVegan);


//Is it Gluten Free check
Plate.prototype.isGlutenFree = function(){
	for (i= 0; i<this.items.length; i++){
		if (this.items[i].glutenFree === false){
			amIGluten = false; 
			return amIGluten;
		}
	}
	if (typeof amIGluten ==="undefined"){
		amIGluten = true;
		return amIGluten;
		// return true;
	}
};

glutenFreePlate2.isGlutenFree();
console.log("Am I Gluten Free?", amIGluten);

//Is it citrus free check?
Plate.prototype.isCitrusFree = function(){
	for (i= 0; i<this.items.length; i++){
		if (this.items[i].citrusFree === false){
			amICitrus = false;
			return amICitrus;
		}	
	}
	if (typeof amICitrus ==="undefined"){
		amICitrus = true;
		return amICitrus;
		// return true;
	}
};
notVeganPlate.isCitrusFree();
console.log("Am I Citrus Free?", amICitrus);


//5. Instantiate different Plates
//Burrito Plate
var cheese = new FoodItem("cheese", 300, false, false, true);
var chicken = new FoodItem("chicken", 250, false, false, true);
var beans = new FoodItem("beans", 120, true, true, true);
var peppers = new FoodItem("peppers", 50, true, true, true);
var burritoItems = [beans, chicken, cheese, peppers];
var burritoPlate = new Plate ("Burrito Plate", "the best burrito in town", 12.50, burritoItems);
burritoPlate.toString();
console.log(burritoPlate.toString());

//Guacamole Plate
var avacado = new FoodItem("avacado", 250, true, true, true);
var lemon = new FoodItem("lemon", 100, true, true, false);
var chips = new FoodItem("chips", 50, true, false, true);
var guacamoleItems = [avacado, lemon, chips, peppers];
var guacamolePlate = new Plate ("Guacamole Plate", "spicy", 10, guacamoleItems);
console.log(guacamolePlate.toString());

//Margarita Drink
var tequila = new FoodItem("tequila", 250, true, false, false );
var salt = new FoodItem("salt", 100, false, false, true);
var lemon = new FoodItem("lemon", 50, true, true, false);
var tripleSec = new FoodItem("triple sec", 150, true, true, false);
var margaritaItems = [tequila, salt, lemon, tripleSec];
var margaritaDrink = new Drink("Margarita", "strong", margaritaItems);
console.log(margaritaDrink.toString());


//7. Instantiate a Menu 
var menuItems = [burritoPlate, guacamolePlate, margaritaDrink]
var dinnerMenu = new Menu(menuItems);
console.log(dinnerMenu.toString());

//8. Instantiate Restaurant
var theRestaurant = new Restaurant("Kerry-oke ", "the best mexican karaoke restaurant in downtown Boulder", dinnerMenu);

console.log(theRestaurant.toString());


