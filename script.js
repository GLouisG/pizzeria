//business logic
function crust(price, name) {
  this.price = price;
  this.name = name;
}

var stuffed = new crust(700, "stuffed");
var gluten = new crust(300, "gluten free");
var crisp = new crust(200, "crispy");


function size(price, name) {
  this.price = price;
  this.name = name;
}
var small = new size(700, "small");
var mid = new size(800, "medium");
var large = new size(900, "large");


function pizzaGen() {
  $(document).ready(function() {


    var inputTopping = document.getElementById("toppings").value;
    var inputCrust = document.getElementById("crusts").value;
    var inputSize = document.getElementById("sizes").value;


    if (inputSize === "large") {
      var theSize = large;
    } else if (inputSize === "medium") {
      var theSize = mid;
    } else {
      var theSize = small;
    }

    if (inputCrust === "GlutenFree") {
      var theCrust = gluten;
    } else if (inputCrust === "stuffed") {
      var theCrust = stuffed;
    } else {
      var theCrust = crisp;
    }

    let total = parseInt(theCrust.price) + parseInt(theSize.price)



    //user interface logic
    $("form#new-pizza").submit(function(event) {
      event.preventDefault();

    var mushroom = document.getElementById("mushCheck").checked;
    var salami = document.getElementById("salCheck").checked;
    var pepperoni = document.getElementById("pepCheck").checked;

      if (mushroom === true) {
        $("ul#extras").append("<li>Mushroom</li>");
      }
      if (salami === true) {
        $("ul#extras").append("<li>Salami</li>");
      }
      if (pepperoni === true) {
        $("ul#extras").append("<li>Pepperoni</li>");
      }

      $("#receipt").append('<div class="row entry">' +
        '<div class="col-md-3"> <p>' + inputTopping + '</p></div>' +
        '<div class="col-md-3"><p>' + inputSize + '</p></div>' +
        '<div class="col-md-3"><p>' + inputCrust + '</p></div>' +
        '<div class="col-md-3"><p>' + total + '</p></div>' +
        '</div>');

      $(".deliver").click(function() {
        prompt("Where should we deliver to?");
        alert("your order will be delivered to your location");
        $(".del-fee").toggle();
      });

      $(".pick").click(function() {
        alert("Hope to see you soon.");
      });
    });

  });

}