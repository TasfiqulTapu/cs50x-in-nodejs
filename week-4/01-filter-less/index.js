const fs = require("fs");
const getInput = require("../../getInput.js");
    let bmp = fs.readFileSync("./images/yard.bmp");
module.exports = main;
async function main(){
    console.log("test"); 
    console.log(bmp);
    process.exit();
}