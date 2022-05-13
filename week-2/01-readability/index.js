const getInput = require("../../getInput.js");
module.exports = main;
//this one is at least clean

module.exports = main;
async function main() {
  let input = await getInput("Text: ");
  let letters = countLetters(input);
  let words = countWords(input);
  let sentences = countSentences(input);
  let L = (letters / words) * 100;
  let S = (sentences / words) * 100;
  let readability = countReadability(L, S);
  console.log(readability);
  process.exit();
}

function countLetters(x) {
  let arr = x.match(/[A-Za-z]/g);
  return arr.length;
}
function countWords(x) {
  let arr = x.split(" ");
  return arr.length;
}
function countSentences(x) {
  let arr = x.match(/\?|\.|!/gm);
  return arr.length;
}
// parameter 0: number of letters per 100 words
// parameter 1: number of sentences per 100 words 
function countReadability(l, s) {
  let index = 0.0588 * l - 0.296 * s - 15.8;
  let i = Math.round(index);
  if (i < 1) {
    return "Before Grade 1";
  } else if (i > 16) {
    return "Grade 16+";
  } else {
    return `Grade ${i}`;
  }
}
