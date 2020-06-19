function PizzaPie(size, protein, vegetable, addOns){
  this.size = size;
  this.protein = protein;
  this.vegetable = vegetable;
  this.addOns = addOns
  this.price = "";
}

function calculateAddons(){
  let el = document.getElementById("funToppings");
  let products = el.getElementsByTagName("input");
  let len = products.length;
    for (var i=0; i<len; i++) {
      if (products[i].type === 'checkbox') {
        products[i].onclick = updateCost;
      }

    }
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
      let addOns = parseInt($(["#addOns"].val()));
      let newPizzaPie = new PizzaPie(size, protein, vegetable, addOns);
      $("#output").show();
      $("#pizzaPrice").text(newPizzaPie.pizzaPieprice());

  });
});
