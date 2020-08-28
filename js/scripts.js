$(document).ready(function () {
  // * Business Logic
  function Pizza(size) {
    this.size = size;
    this.toppings = [];
    this.pizzasummary = [];
    this.cost = 0;
    this.currentId = 0;
  }

  var sizeinput = $("#size").val();
  var toppingsselected = $(".radio:checked").val();

  Pizza.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  };

  Pizza.prototype.determineCost = function () {};

  Pizza.prototype.addSelectedToppings = function () {
    $(".radio").each(function () {
      toppings.push($("input[type=radio]:checked").val());
    });
  };
  // * Interface Logic

  $("form").submit(function (event) {
    event.preventDefault();
    let pizzaOrdered = new Pizza($("#size").val());
    pizzaOrdered.pizzasummary.splice(0, 1, $("#size").val());
    pizzaOrdered.addSelectedToppings();
    console.log(pizzaOrdered);
    $("#outputforordersummary").replaceWith(pizzaOrdered.pizzasummary);
  });
});
