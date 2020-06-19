function PizzaPie(size, protein, vegetable){
  this.size = size;
  this.protein = protein;
  this.vegetable = vegetable;
  this.price = "";
}

PizzaPie.prototype.pizzaPieprice = function() {
  return this.size + this.protein + this.vegetable;
}


$(document).ready(function() {
  $("form#pizzaPie").submit(function(event) {
    event.preventDefault();
      let size = parseInt($("#size").val());
      let protein = parseInt($("#protein").val());
      let vegetable = parseInt($("#vegetable").val());
      let newPizzaPie = new PizzaPie(size, protein, vegetable);
      $("#output").show();
      $("#pizzaPrice").text(newPizzaPie.pizzaPieprice());

  });
});
