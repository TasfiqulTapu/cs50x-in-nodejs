const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//not my proudest work, but gotta make do 
module.exports = main;
function main(){
let num; 
getNum();
function getNum(){
  rl.question("Number: ",(input)=>{
    // input = input.replaceAll("-","") 
    num = parseInt(input)
    if(!num || typeof(num)!=="number") return getNum()
    validateNum(num)
    rl.close()
  })
}
//Luhn's Algorithm
function validateNum(x){
  
  x = JSON.stringify(x);
  let original = x;
  x= [...x].reverse().join("")
  let sum=0;
  let product = "";
  for(let i = 0; i<x.length;i++){
    if(i%2==0){
      sum+= parseInt(x[i])
    }else{
      product+=JSON.stringify(parseInt(x[i])*2)
    }
  }
  for(let i=0;i<product.length;i++){
    sum+= parseInt(product[i])
  }
  if(sum%10 !== 0){ console.log("Invalid")}
  else{
    if(original[0] == "4") console.log("VISA");
    if(original.startsWith("34") || original.startsWith("37")) console.log("AMEX");
    if(["51","52","53","54","55"].includes(original[0]+original[1])) console.log("MASTERCARD");
  }
  process.exit(0)
  //console.log(sum)
}
}; main();
