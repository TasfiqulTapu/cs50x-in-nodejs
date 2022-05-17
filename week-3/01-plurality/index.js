const getInput = require("../../getInput.js");
module.exports = main;

class Candidate {
  constructor(name, votes) {
    this.name = name;
    this.votes = votes;
  }
}
// stores the Candidate objects used later to assign votes to 
let candidates = [];

async function main() {
  let maxCandidates = 9;
  let cInput = await getInput("Candidates: ");
  cInput = cInput.split(" ");
  let candidateCount = cInput.length;
  if (candidateCount < 2) {
    console.log("Usage: [candidate ...]\n");
    process.exit();
  }
  if (candidateCount > maxCandidates) {
    console.log(`Maximum number of candidates is`, maxCandidates);
    process.exit();
  }
  for (let i = 0; i < candidateCount; i++) {
    candidates.push(new Candidate(cInput[i], 0));
  }
  let voterCount = parseInt(await getInput("Number of votes: "));

  for (let i = 0; i < voterCount; i++) {
    let name = await getInput("Vote: ");
    if (!vote(name)) {
      console.log("Invalid vote.");
    }
  }
  print_winner(); // c naming convenient (´-﹏-`；)
  process.exit();
}

function vote(name) {
  for (const c of candidates) {
    if (c.name == name) {
      c.votes += 1;
      return true;
    }
  }
  return false;
}
function print_winner() {
  let h = candidates[0].votes;
  let highest = [];
  for (const c of candidates) {
    if (c.votes > h) {
      highest = [c];
    }
    if (c.votes == h) {
      highest.push(c);
    }
  }
  for (const c of highest) {
    console.log(c.name);
  }
}
