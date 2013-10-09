//typeof name = string
// typeof calories = num,
// typeof vegan = boolean
// typeof glutenFree = boolean
// typeof citrusFree = boolean
//constructor for FoodItem
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;	
};

//toString method to return FoodItems properties in readable format
FoodItem.prototype.toString = function(){
var stringFood = "Food information is as follows: Name: " + this.name + " Calories:" + this.calories + 
" Vegan: " + this.vegan + " Gluten Free: " + this.glutenFree + " Citrus Free: " + this.citrusFree;
return stringFood;
};



//instantiation of object 
var bread = new FoodItem("Bread", 210, true, false, true);
bread.toString();
console.log(bread.toString());

var salad = new FoodItem("salad", 300, true, true, true);
salad.toString();
console.log(salad.toString());

var chocolate = new FoodItem("chocolate", 400, false, false, true);
chocolate.toString();
console.log(chocolate.toString());