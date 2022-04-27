//part 01
console.log("hello, world");

//part 02
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What's your name? ", (name)=>{
  name = name.trim();
  console.log(`hello, ${name}`);
  rl.close();
})