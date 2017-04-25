$(document).ready(function() {
console.log('poop2');

$('.modal').modal();
$('.button-collapse').sideNav();

//variables for ordering
var $deck = $('.card');
var $cartBody = $('#cart').children('tbody');
var $subtotal = $('#subtotalAmt').text();
var $tax = $('#taxAmt').text();
var $total = $('#totalAmt').text();
var subtotal = 0;
var tax = 0;
var total = 0;
var taxrate = .0885

//ordering function
for(let i = 0; i<$deck.length; i++){
  var $orderButton = $($deck[i]).children('.card-action');

  $orderButton.click('a', function(){
    var $itemName = $($deck[i]).children('.card-content').children('h5').text();
    var $itemPrice = $($deck[i]).children('.card-content').children('p').children('span').text();

    // insert items in to order cart
    var $row = $('<tr>');
    var $itemCell = $('<td>').text($itemName);
    var $priceCell = $('<td>').text($itemPrice);
    $priceCell.css('text-align : center');
    $row.append($itemCell, $itemPrice);
    $cartBody.append($row);

    // update subtotals
    subtotal += parseFloat($itemPrice);
    $('#subtotalAmt').text('$'+subtotal.toFixed(2));

    // update tax
    tax = taxrate*parseFloat(subtotal);
    $('#taxAmt').text('$'+tax.toFixed(2));

    // update total
    total = parseFloat(subtotal+tax);
    $('#totalAmt').text('$'+total.toFixed(2));

  })
}

// variables for submitting order
var $submitButton = $('#submitButton');
var $firstName = $('#first_name');
var $lastName = $('#last_name');
var $telephone = $('#telephone');
var $address1 = $('#address1');
var $address2 = $('#address2');
var $email = $('#email');



//submitting order function
$submitButton.click('button', function(event){
  event.preventDefault();
  if($lastName.val() === '' ||
    $firstName.val() === '' ||
    $telephone.val() === '' ||
    $address1.val() === '' ||
    $address2.val() === '' ||
    $email.val() === '' ||
    subtotal === 0
  ){
    console.log('incomplete form');
    Materialize.toast('Way to fill out the form wrong. Try again.', 4000)
  } else {
    Materialize.toast("Success. It's going down.", 4000)
    console.log('complete form');
  }
})


});
