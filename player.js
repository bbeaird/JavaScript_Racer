

$(document).ready(function() {
  $(document).on('keyup', advancePlayers)
});

// update_player_position('player1', 10);

var advancePlayers = function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    if (event.keyCode === 81) {
      console.log("Inside keyCode81 if.")
      advancePlayer($('#player1_strip'))
    }
    else if (event.keyCode === 80) {
      console.log("Inside keyCode80 if.")
      advancePlayer($('#player2_strip'))
    }
  };

var advancePlayer = function($playerStrip){
  
  var $activeCell = $playerStrip.find('.active')
  $activeCell.removeClass('active')
  
  var $nextCell = $activeCell.find('+ td')
  if ($nextCell.length === 0) {
    console.log("End of game!")
  }
  else { 
    $nextCell.addClass('active') 
  }
}