function pizzaGen(){
function crust(price, name){
  this.price = price;
  this.name = name;
}

var stuffed = new crust(700, "stuffed");
var gluten = new crust(500, "gluten free");
var crisp = new crust(200, "crispy");


function size(price, name){
  this.price = price;
  this.name = name;
}
var small = new size(500, "small");
var mid = new size(200, "medium");
var large = new size(100, "large");

$(document).ready(function(){

$("form#new-pizza").submit(function(event){
  event.preventDefault();

   var inputTopping = document.getElementById("toppings").value;
    var inputCrust = document.getElementById("crusts").value;
    var inputSize = document.getElementById("sizes").value;
    console.log(inputCrust);

    if(inputSize==="large"){
      var theSize = large;
    }else if(inputSize==="medium"){
      var theSize = mid;
    }else{
      var theSize = small;
    }
    
    if(inputCrust ==="gluten"){
      var theCrust = gluten;
    }else if(inputCrust ==="stuffed"){
      var theCrust = stuffed;
    }else{
      var theCrust = crisp;
    }

    var total = parseInt(theCrust.price) + parseInt(theSize.price);
    console.log(total);

    var mushroom = document.getElementById("mushCheck").checked;
    var salami = document.getElementById("salCheck").checked;
    var pepperoni = document.getElementById("pepCheck").checked;

    if(mushroom===true){
      $("ul#extras").append("<li>Mushroom</li>");
    }
    if(salami===true){
      $("ul#extras").append("<li>Salami</li>");
    }
    if(pepperoni===true){
      $("ul#extras").append("<li>Pepperoni</li>");
    }

    $("#receipt").append( '<div class="row entry">'+
    '<div class="col-md-3"> <p>'  + inputTopping  + '</p></div>' +
    '<div class="col-md-3"><p>' + inputSize+ '</p></div>'  +
    '<div class="col-md-3"><p>' + inputCrust + '</p></div>'  +
    '<div class="col-md-3"><p>' + total + '</p></div>' +
  '</div>');

  $(".deliver").click(function(){
    prompt("Where should we deliver to?");
    alert("your order will be delivered to your location");
  });

});

});
}
