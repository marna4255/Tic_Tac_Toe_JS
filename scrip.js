// With the help of this variable we will change the turns of the players.
let turn_x = false;
// Connects the numbers(of the div's) of the square selection,
// to know what combination was formed and to check if there is a win.
let x_picked_squre_choice = "";
let o_picked_squre_choice = "";
//counting how many moves we did in the game for knowing when to stop and check win.
let turns_passed = 0;
// numbers of combination's to win.
const winner = ["123", "456", "789", "159", "357", "369", "258", "147"];

function startGame(a) {
  // check if the squre(div) is empty.
  if (event.target.innerText == "") {
    // turn x.
    // check if it's x turn now.
    if (turn_x == true) {
      //  if the squre is empty print "x".
      event.target.innerText = "x";
      // a is the squre(div) that we pick 1-9,
      // toString() convert the number to string and added to the variable str (let x_picked_squre_choice ="").
      x_picked_squre_choice += a.toString();
      // counting how many moves we did in the game for knowing when to stop and check a win.
      turns_passed += 1;
      // after 5 turns we need to check a win,
      // We run the function that checks for a win.
      if (turns_passed >= 5) {
        checkwinner();
      }
      // change the turns of the players.
      turn_x = false;
      // turn o.
      // if the squre is empty print "o".
    } else {
      event.target.innerText = "o";
      // a is the squre(div) that we pick 1-9,
      // toString() convert the number to string and added to the variable str (let o_picked_squre_choice ="").
      o_picked_squre_choice += a.toString();
      // counting how many moves we did in the game for knowing when to stop and check a win.
      turns_passed += 1;
      // after 5 turns we need to check a win,
      // We run the function that checks for a win.
      if (turns_passed >= 5) {
        checkwinner();
      }
      // change the turns of the players.
      turn_x = true;
    }
  }
}

function checkwinner() {
  // We pass over the const "winner" array to check if there is a match.
  for (let i = 0; i < winner.length; i++) {
    // split("") convert the string '123' to array ['1','2','3'].
    winner_combination = winner[i].split("");
    // every time the combination number match counting until 3 numbers to alert about winning.
    let three_points_to_win = 0;

    // after the match
    // Checking whose turn it is to announce the win.
    if (turn_x == true) {
      // We pass over the new array that we split before to check if there is a match.
      for (let z = 0; z < winner_combination.length; z++) {
        // includes() returns true if an array contains a specified value.
        if (x_picked_squre_choice.includes(winner_combination[z])) {
          // if the specified value is there Increase by 1.
          three_points_to_win += 1;
          if (three_points_to_win == 3) {
            alert("Player X is the winner!!!");
          }
        }
      }
    } else {
      // We pass over the new array that we split before to check if there is a match.
      for (let z = 0; z < winner_combination.length; z++) {
        // includes() returns true if an array contains a specified value.
        if (o_picked_squre_choice.includes(winner_combination[z])) {
          // if the specified value is there Increase by 1.
          three_points_to_win += 1;
          if (three_points_to_win == 3) {
            alert("Player o is the winner!!!");
          }
        }
      }
    }
  }
}

function resetButton() {
  // location.reload() method reloads the current document.
  document.location.reload();
}
