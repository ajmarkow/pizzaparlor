// * Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzasummary = [];
  this.cost = 0;
  this.currentId = 0;
}

pizza.prototype.assignId() = function () {
  this.currentId += 1;
  return this.currentId;
};

// * Interface Logic
Pizza.prototype.selectSize = function () {
  const sizeinput = $("#size").val();
  switch (sizeinput) {
    case "small":
      pizzasummary.push("small");
      this.size = "small";
      break;
    case "large":
      pizzasummary.push("large");
      this.size = "large";
      break;
    default:
      this.pizasummary.push("small");
  }

  Pizza.prototype.recordToppings = function () {};

  console.log(this.pizasummary);
};

var toppingsarray = ["pepperoni", "bell pepper"];

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let sizeinput = $("#size").val();
    let toppingsselected = toppingsarray;
    let pizzaOrdered = new Pizza(sizeinput, toppingsselected);
    console.log(pizzaOrdered.size);
  });
});
