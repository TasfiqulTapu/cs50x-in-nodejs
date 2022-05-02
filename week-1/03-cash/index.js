const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//not my proudest work, but gotta make do
module.exports = getCents;
getCents()
let cents;
function getCents(){
  rl.question("Change owed: ",(input)=>{
     cents = parseFloat(input)
     if(cents == 0) getCoinAmount(cents) // its very late at night I can't think of any other solution
     if(!cents || cents<0 || Math.floor(cents)!==cents){
       getCents();
       return;
       }
    getCoinAmount(cents)
     
  })
}
function getCoinAmount(nCent){
  let total=0;
  let coins=[25,10,5,1]
  for(let i=0;i<coins.length;i++){
    total+= Math.floor(nCent/coins[i])
    nCent -= Math.floor(nCent / coins[i])*coins[i]
  }
  console.log(total)
  process.exit(0) //readline doesn't kill the process automatically
}



