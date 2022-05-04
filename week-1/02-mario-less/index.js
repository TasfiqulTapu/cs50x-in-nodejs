const getInput = require("../../getInput.js");
module.exports = main;

async function main() {
  let height;
  do {
    height = parseInt(await getInput("Height: "));
  } while (!height || height >= 8 || height <= 1 || typeof height !== "number");
  generateStaircase(height);
  process.exit()
}
function generateStaircase(h) {
  for (let i = 0; i < h; i++) {
    let s = "";
    for (let j = 8; j >= i; j--) {
      s += " ";
    }
    for (let j = 0; j <= i; j++) {
      s += "#";
    }
    console.log(s);
  }
}
