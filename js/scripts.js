function PizzaPie(size, protein, vegetable, addOns){
  this.size = size;
  this.protein = protein;
  this.vegetable = vegetable;
  this.addOns = addOns;
  this.price = "";
}





PizzaPie.prototype.pizzaPieprice = function() {
  return this.size + this.protein + this.vegetable + this.addOns;
}


$(document).ready(function() {
  $("form#pizzaPie").submit(function(event) {
    event.preventDefault();
      let size = parseInt($("#size").val());
      let protein = parseInt($("#protein").val());
      let vegetable = parseInt($("#vegetable").val());
      var addOns =[];
      $('#funToppings input:checked').each(function (i){
        addOns[i] = $(this).val();
      });

      addOnsTotal = 0;

      $.each(addOns, function(){addOnsTotal+=parseInt(this) || 0;});

      let newPizzaPie = new PizzaPie(size, protein, vegetable, addOnsTotal);
      $("#output").show();
      $("#pizzaPrice").text(newPizzaPie.pizzaPieprice());

  });
});
