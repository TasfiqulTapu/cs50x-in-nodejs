const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//this one is at least clean

module.exports = main;
async function main(){
   rl.question("Text: ",(input)=>{
     rl.close()
     
     let letters = countLetters(input)
     let words = countWords(input)
     let sentences = countSentences(input)
     let L = (letters/words)*100;
     let S = (sentences/words)*100
     let readability = countReadability(L,S);
     
     console.log(readability);
  })
 
  
}main()
  
  
function countLetters(x){
  let arr =  x.match(/[A-Za-z]/g)
  return arr.length;
}
function countWords(x){
  let arr = x.split(" ")
  return arr.length;
}
function countSentences(x){
  let arr = x.match(/\?|\.|!/gm)
  return arr.length;
}
function countReadability(l,s){
  let index = (0.0588 * l) - (0.296 * s) - 15.8
  let i = Math.round(index)
  if(i<1){
    return "Before Grade 1"
  }else if(i>16){
    return "Grade 16+"
  }else{
    return `Grade ${i}`
  }
}




  
  
  
  
  