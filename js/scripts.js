// * Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzasummary = [];
  this.cost = 0;
  this.currentId = 0;
}

var sizeinput = $("#size").val();

Pizza.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// * Interface Logic
// Pizza.prototype.selectSize = function (thepizza) {
//   if (sizeinput === "small") {
//     Pizza.size = "small";
//     Pizza.cost = +5;
//     thepizza.pizzasummary.push("small");
//   } else sizeinput === large;
//   {
//     Pizza.size = "large";
//     Pizza.cost = +10;
//     thepizza.pizzasummary.push("large");
//   }
// };

//   Pizza.prototype.recordToppings = function () {};

//   console.log(this.pizasummary);
// };

var toppingsarray = ["pepperoni", "bell pepper"];

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let toppingsselected = toppingsarray;
    let pizzaOrdered = new Pizza(sizeinput, toppingsselected);
    pizzaOrdered.pizzasummary.push($("#size").val());
    // pizzaOrdered.selectSize(pizzaOrdered);
    console.log(pizzaOrdered.pizzasummary);
  });
});
