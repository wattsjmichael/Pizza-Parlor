//Business Logic
function PizzaPie(proteins){
  this.proteins = proteins;

}




PizzaPie.prototype.pizzaPiePrice = function() {
  return this.proteins;
}

//User Interface Logic
$(document).ready(function() {
  $("form#pizzaToppings").submit(function(event) {
    event.preventDefault();
    let proteins = parseInt("$#proteins option:selected").val();
    let newPizzaPie = new PizzaPie(proteins)
    $("#output").show();
    $("#pizzaPrice").text(newPizzaPie.pizzaPiePrice());
  });
});




$("input[type=checkbox]:checked").each(function(checkbox){
  newPizzaPie.addProtein(parseInt($(checkbox).val()));

});
