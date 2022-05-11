const getInput = require("../../getInput.js");
module.exports = main;

// Points assigned to each letter of the alphabet
let POINTS = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
  10,
];

async function main(main) {
  // Get input words from both players
  let word1 = await getInput("Player 1: ");
  let word2 = await getInput("Player 2: ");

  // Score both words
  let score1 = compute_score(word1);
  let score2 = compute_score(word2);

  // Print the winner after checking who has more points
  if (score1 > score2) {
    console.log("Player 1 wins!");
  } else if (score1 < score2) {
    console.log("Player 2 wins!");
  } else {
    console.log("Tie!");
  }
  process.exit();
}

function ord(chr) {
  return chr.charCodeAt(0);
}

function compute_score(word) {
  let temp = 0;
  // COMPLETED: Compute and return score for string
  // check for char code and associate it with correspoinding point
  // temp collects the points
  // adds nothing if char isn't in alphabet
  for (let i = 0; i < word.length; i++) {
    let c = ord(word[i]);
    if (c >= 65 && c <= 90) {
      c -= 65;
      temp += POINTS[c];
    } else if (c >= 97 && c <= 122) {
      c -= 97;
      temp += POINTS[c];
    }
  }
  return temp;
}
