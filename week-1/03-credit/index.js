const getInput = require("../../getInput.js");
//not my proudest work, but gotta make do
module.exports = main;

async function main() {
  let card = await getNum();
  let type = validateCard(card);
  console.log(type);
  process.exit();
}

async function getNum() {
  let num;
  do {
    num = parseInt(await getInput("Number: "));
  } while (!num || typeof num !== "number");
  return num;
}

//Luhn's Algorithm

function validateCard(x) {
  x = JSON.stringify(x);
  let original = x;
  x = [...x].reverse().join("");
  let sum = 0;
  let product = "";
  for (let i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
      sum += parseInt(x[i]);
    } else {
      product += JSON.stringify(parseInt(x[i]) * 2);
    }
  }
  for (let i = 0; i < product.length; i++) {
    sum += parseInt(product[i]);
  }
  if (sum % 10 !== 0) {
    return "Invalid";
  } else {
    if (original[0] == "4") return "VISA";
    if (original.startsWith("34") || original.startsWith("37")) return "AMEX";
    if (["51", "52", "53", "54", "55"].includes(original[0] + original[1]))
      return "MASTERCARD";
  }
}
