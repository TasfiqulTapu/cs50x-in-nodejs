const getInput = require("../../getInput.js");
module.exports = main;
async function main() {
  //part 01
  console.log("hello, world");

  //part 02
  let name = await getInput("What's your name? ");
  console.log(`hello, ${name}`);
  process.exit();
};
