const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


module.exports = main;

async function main(){
  rl.question("Key: ",(kInput)=>{
    let key = kInput;
    if(key.length !== 26){
      console.log("Key must contain 26 characters.")
      process.exit()
    }
    rl.question("Plaintext: ",(tInput)=>{
      let text = tInput;
      let cipher =""
      for(let i=0;i<text.length;i++){
        cipher += substitutionCipher(key,text[i])
      }
      console.log("Ciphertext: ", cipher)
      rl.close()
    })
    
  })
}main()

function chr(ord){
  return String.fromCharCode(ord)
}
function ord(chr){
  return chr.charCodeAt(0)
}
function substitutionCipher(k,c){
  c = ord(c)
  if(c >= 65 && c<=90){
    c -= 65
    return k[c]
  }else if(c >= 97 && c<=122){
    c -= 97
    return k[c]
  }else{
    return chr(c)
  }
}







