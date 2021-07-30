
function crust(price, name){
  this.price = price;
  this.name = name;
}

var stuffed = new crust(500, "stuffed");
console.log(stuffed);