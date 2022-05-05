const getInput = require("../../getInput.js");
module.exports = main;

async function main() {
  let kInput = await getInput("Key: ");
  let key = parseInt(kInput) % 26;
  if (!key || typeof key !== "number" || key < 1) {
    console.log("Key must be a poitive integer");
    process.exit();
  }
  let tInput = await getInput("Plaintext:  ");
  let text = tInput;
  let cipher = "";
  for (let i = 0; i < text.length; i++) {
    cipher += caeserCipher(key, text[i]);
  }
  console.log("Ciphertext: ", cipher);
  process.exit()
}

function chr(ord) {
  return String.fromCharCode(ord);
}
function ord(chr) {
  return chr.charCodeAt(0);
}
function caeserCipher(k, c) {
  c = ord(c);
  if (c >= 65 && c <= 90) {
    let x = c + k;
    if (x > 90) x = 64 + (x % 90);
    return chr(x);
  } else if (c >= 97 && c <= 122) {
    let x = c + k;
    if (x > 122) x = 96 + (x % 122);
    return chr(x);
  } else {
    return chr(c);
  }
}
