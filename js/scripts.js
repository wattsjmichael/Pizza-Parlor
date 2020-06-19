/*Business Logic
function PizzaPie(vegetables, proteins, sizes){
  this.vegetables = vegetables;
  this.proteins = proteins;
  this.sizes = sizes;
  this.total = "";

}




PizzaPie.prototype.pizzaPiePrice = function() {
  return this.vegetables + this.proteins + this.sizes;
}

//User Interface Logic
$(document).ready(function() {
  $("form#pizzaToppings").submit(function(event) {
    event.preventDefault();
    let vegetable = parseInt($("#vegetables").val());
    let protein = parseInt($("#proteins").val());
    let size = parseInt($("#sizes").val());
    let newPizzaPie = new PizzaPie(vegetables, proteins, sizes)
    $("#output").show();
    $("#pizzaPrice").text(newPizzaPie.pizzaPiePrice());
  });
});

*/

$("input[type=checkbox]:checked").each(function(index, checkbox){
  newPizzaPie.addProtein(parseInt($(checkbox.val()), checkbox.name);

});
