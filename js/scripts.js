function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.pizzasummary = [];
  this.cost = 0;
  this.currentId = 0;
}

// var sizeinput = String($("#size").val());
var toppingsselected = $(".radio:checked").val();
var topping1 = $("input#topping1").val();
var topping2;
var topping3;
var topping4;
var topping5;
var topping6;

Pizza.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Pizza.prototype.setCost = function () {
  if (String($("#size").val()) === "small") {
    return this.pizzasummary.push("$18");
  } else {
    return this.pizzasummary.push("$28");
  }

  // if (sizeinput === "large") {
  //   this.cost ="$28";
  //   return (this.cost = "$28");
  // } else {
  //   this.cost.replaceWith("$18");
  //   return (this.cost = "$18");
  // }
};

Pizza.prototype.addSelectedToppings = function (topping) {
  Pizza.toppings.push(topping);
};
// * Interface Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let pizzaOrdered = new Pizza($("#size").val());
    pizzaOrdered.pizzasummary.splice(0, 1, $("#size").val());
    pizzaOrdered.setCost();
    pizzaOrdered.cost = pizzaOrdered.pizzasummary.slice(1);
    console.log(pizzaOrdered.pizzasummary);
    $("outputforpizzacost").replaceWith(pizzaOrdered.pizzasummary.slice(1));
    $("#outputforordersummary").replaceWith(
      "Your pizza is a size " +
        pizzaOrdered.size +
        " and will cost " +
        pizzaOrdered.cost +
        ".  It will be topped with:" +
        pizzaOrdered.toppings
    );
  });
});
