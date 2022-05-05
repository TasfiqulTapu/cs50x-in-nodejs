const getInput = require("../../getInput.js");
module.exports = main;

async function main() {
  let key = await getInput("Key: ");
  if (key.length !== 26) {
    console.log("Key must contain 26 characters.");
    process.exit();
  }
  let text = await getInput("Plaintext: ");
  let cipher = "";
  for (let i = 0; i < text.length; i++) {
    cipher += substitutionCipher(key, text[i]);
  }
  console.log("Ciphertext: ", cipher);
  process.exit();
}

function chr(ord) {
  return String.fromCharCode(ord);
}
function ord(chr) {
  return chr.charCodeAt(0);
}
function substitutionCipher(k, c) {
  c = ord(c);
  if (c >= 65 && c <= 90) {
    c -= 65;
    return k[c];
  } else if (c >= 97 && c <= 122) {
    c -= 97;
    return k[c];
  } else {
    return chr(c);
  }
}
