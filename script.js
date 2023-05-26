var symbols = ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢']; // Array of symbols
var cards = symbols.concat(symbols); // Duplicate the symbols to create pairs
var flippedCards = [];
var matchedCards = [];

// Shuffle the cards array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Initialize the game board
function initializeBoard() {
  cards = shuffle(cards);
  var gameBoard = $("#game-board");
  gameBoard.empty();

  for (var i = 0; i < cards.length; i++) {
    var card = $("<div class='card'></div>");
    card.data("symbol", cards[i]);
    card.text(cards[i]);
    gameBoard.append(card);
  }

  $(".card").click(function() {
    var card = $(this);

    if (card.hasClass("matched") || flippedCards.length >= 2) {
      return;
    }

    card.addClass("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      var symbol1 = flippedCards[0].data("symbol");
      var symbol2 = flippedCards[1].data("symbol");

      if (symbol1 === symbol2) {
        flippedCards[0].addClass("matched");
        flippedCards[1].addClass("matched");
        matchedCards.push(flippedCards[0]);
        matchedCards.push(flippedCards[1]);

        if (matchedCards.length === cards.length) {
          alert("Congratulations! You've matched all the cards.");
        }
      } else {
        setTimeout(function() {
          flippedCards[0].removeClass("flipped");
          flippedCards[1].removeClass("flipped");
        }, 1000);
      }

      flippedCards = [];
    }
  });

  $("#reset-btn").click(function() {
    initializeBoard();
  });
}

// Initialize the game
$(document).ready(function() {
  initializeBoard();
});


$(document).ready(function() {
  // Event handler for navigation links
  $("a").click(function(e) {
    e.preventDefault();
    var targetUrl = $(this).attr("href");
    window.location.href = targetUrl;
  });
});

$("#startBtn").click(function(){
  console.log("inside")
  window.location.href='index.html'
})
