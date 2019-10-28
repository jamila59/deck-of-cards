var suits = ['clubs', 'diamonds', 'spades', 'hearts'];
var cards = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var deck = [];
$(document).ready(function(){
  suits.forEach(function(suit){
    cards.forEach(function(card){
      var deck = (card + " of " + suit);
       console.log(deck);
      $("ul#deckList").append("<li>" + deck + "</li>");
    });
  });
})
