// * Business Logic

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.pizzasummary = [];
  this.cost = 0;
  this.currentId = 0;
}

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
};

Pizza.prototype.setToppings = function () {
  if (String($("#toppingcombo").val()) === "hawaiian") {
    this.pizzasummary.push("hawaiian");
    return this.toppings.push("canadian bacon", "pineapple");
  } else if (String($("#toppingcombo").val()) === "taco") {
    this.pizzasummary.push("taco");
    return this.toppings.push("ground beef", "zesty salsa");
  } else if (String($("#toppingcombo").val()) === "margherita") {
    this.pizzasummary.push("margherita");
    return this.toppings.push("basil", "ricotta", "garlic sauce");
  }
};

// * Interface Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let pizzaOrdered = new Pizza($("#size").val());
    pizzaOrdered.pizzasummary.splice(0, 1, $("#size").val());
    pizzaOrdered.setCost();
    pizzaOrdered.setToppings();
    console.log(pizzaOrdered);
    pizzaOrdered.cost = pizzaOrdered.pizzasummary.slice(1, 2);
    $("#outputforpizzacost").replaceWith(pizzaOrdered.cost);
    $("#outputforordersummary").replaceWith(
      "Your pizza is a size " +
        pizzaOrdered.size +
        " and will cost " +
        pizzaOrdered.cost +
        ".  It will be topped with:" +
        pizzaOrdered.toppings +
        ". The type of pizza is " +
        pizzaOrdered.pizzasummary.slice(2, 3) +
        "."
    );
  });
});
