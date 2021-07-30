
function crust(price, name){
  this.price = price;
  this.name = name;
}

var stuffed = new crust(500, "stuffed");
var nogluten = new crust(200, "gluten free");
var crispy = new crust(100, "crispy");
console.log(nogluten);

function size(price, name){
  this.price = price;
  this.name = name;
}
var small = new size(500, "small");
var medium = new size(200, "medium");
var large = new size(100, "large");

console.log(small);