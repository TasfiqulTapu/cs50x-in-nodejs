const getInput = require("../../getInput.js");
module.exports = main;

class Candidate {
  constructor(name, votes, eli) {
    this.name = name;
    this.votes = votes;
    this.eliminated = eli;
  }
}

let candidates = [];
let preferences = [];
const maxCandidates = 9;
const maxVoters = 100;
let voterCount;
let candidateCount;
async function main() {
  let cInput = await getInput("Candidates: ");
  cInput = cInput.split(" ");
  candidateCount = cInput.length;
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
  if (voterCount > maxVoters) {
    console.log("Maximum number of voters is", maxVoters);
    process.exit();
  }
  for (let i = 0; i < voterCount; i++) {
    preferences.push([]);
  }
  for (let i = 0; i < voterCount; i++) {
    for (let j = 0; j < candidateCount; j++) {
      let name = await getInput(`Rank ${j + 1}`);
      if (!vote(i, j, name)) {
        console.log("Invalid vote.");
        process.exit();
      }
    }
    console.log("\n");
  }

  while (true) {
    tabulate();

    let won = print_winner();
    if (won) break;

    let min = find_min();
    let tie = is_tie(min);

    if (tie) {
      for (let i = 0; i < candidateCount; i++) {
        if (!candidates[i].eliminated) {
          console.log(candidates[i].name);
        }
      }
      break;
    }
    eliminate(min);

    for (let i = 0; i < candidateCount; i++) {
      candidates[i].votes = 0;
    }
  }

  process.exit();
}

function vote(i, j, name) {
  //return false if name doesn't exist
  //add the candidate to preferences array
  // where i = voter index and j= preference index
  for (let k = 0; k < candidates.length; k++) {
    if (candidates[k].name == name) {
      preferences[i].push(name);
      return true;
    }
  }
  return false;
}
function tabulate() {
  // add number of votes to each candidate ( who haven't been eliminated)

  for (let i = 0; i < preferences.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      let desired = candidates.findIndex((e) => e.name == preferences[i][j]);
      if (!desired.eliminated) candidates[desired].votes += 1;
    }
  }
}
function print_winner() {
  // print name of candidate who has >50% votes and return true
  //else return false
  let x = [];
  for (let i = 0; i < candidates.length; i++) {
    if (!candidates[i].eliminated) x.push(candidates[i]);
    if (candidates[i].votes >= voterCount / 2) {
      console.log(candidates[i].name);
      return true;
    }
  }
  if ((x.length = 1)) {
    console.log(x[0].name);
    return true;
  }
  return false;
}
function find_min() {
  // return the minimum number of vote anyone in the election has
  let min = voterCount;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes < min && candidates[i].eliminated == false) {
      min = candidates[i].votes;
    }
  }
  return min;
}
function is_tie(min) {
  // return true if everyone left has min votes
  // else false
  let notLowest;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes > min && candidates[i].eliminated == false) {
      notLowest == candidates[i];
    }
  }
  return !!notLowest;
}
function eliminate(min) {
  // eliminate anyone who has min votes
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes <= min && candidates[i].eliminated == false) {
      candidates[i].eliminated = true;
    }
  }
}
