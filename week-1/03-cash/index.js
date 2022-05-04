const getInput = require("../../getInput.js");

module.exports = main;
async function main() {
  let cents = await getCents();
  let coins = getCoinAmount(cents);
  console.log(coins);
  process.exit(0);
}
let cents;
async function getCents() {
  let c;
  do {
    c = parseFloat(await getInput("Change owed: "));
    if (c == 0) return c;
  } while (!c || c < 0 || Math.floor(c) !== c);
  return c;
}

function getCoinAmount(nCent) {
  let total = 0;
  let coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    total += Math.floor(nCent / coins[i]);
    nCent -= Math.floor(nCent / coins[i]) * coins[i];
  }
  return total
}
