const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function getInput(prompt){
  return await new Promise(resolve => {
  rl.question(prompt, resolve)
})
}
module.exports = getInput;