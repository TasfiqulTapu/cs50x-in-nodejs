const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
module.exports = ask;
  function ask() {
    rl.question("Height:", (n) => {
      // rl.close();
      if (n[0] === "-") {
        ask();
        return;
      }
      let height = parseInt(n);
      if (height >= 8 || height <= 1 || typeof height !== "number") {
        ask();
        return;
      }
      generateStaircase(height);
    });
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

  ask();