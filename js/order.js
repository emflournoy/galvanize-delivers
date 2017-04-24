$(document).ready(function() {
console.log('poop2');

var $deck = $('.card');
var $cartBody = $('#cart').children('tbody');
var $subtotal = $('#subtotalAmt').text();
var $tax = $('#taxAmt').text();
var $total = $('#totalAmt').text();
var subtotal = 0;
var tax = 0;
var total = 0;
var taxrate = .0885

for(let i = 0; i<$deck.length; i++){
  var $orderButton = $($deck[i]).children('.card-action');

  $orderButton.click('a', function(){
    var $itemName = $($deck[i]).children('.card-content').children('h5').text();
    var $itemPrice = $($deck[i]).children('.card-content').children('p').children('span').text();

    // insert items in to order cart
    var $row = $('<tr>');
    var $itemCell = $('<td>').text($itemName);
    var $priceCell = $('<td>').text($itemPrice);
    $row.append($itemCell, $itemPrice);
    $cartBody.append($row);

    // update subtotals
    subtotal += parseFloat($itemPrice);
    $('#subtotalAmt').text('$'+subtotal);

    // update tax
    tax += taxrate*parseFloat(subtotal);
    $('#taxAmt').text('$'+tax.toFixed(2));

    // update total
    total = parseFloat(subtotal+tax);
    $('#totalAmt').text('$'+total.toFixed(2));

  })
}





// $deck.click('a', function(event){
//   var $clickedCard = event.target.innerText
//   console.log($clickedCard);
// })


});
