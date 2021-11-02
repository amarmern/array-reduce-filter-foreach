var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

let maxPilotScore = personnel.reduce((a, b) => {
  if (a.pilotingScore > b.pilotingScore) {
    return a;
  }
  return b;
});

// using foreach
let maxShootingScore = Infinity;
let minShootingScore = -Infinity;

personnel.forEach((obj) => {
  if (obj.shootingScore > maxShootingScore) {
    maxShootingScore = obj.shootingScore;
  }
  if (obj.shootingScore < minShootingScore) {
    minShootingScore = obj.shootingScore;
  }
});

const maxPilot = personnel.filter((ele) => {
  return ele.pilotingScore === maxPilotScore.pilotingScore;
});
console.log(maxPilot);

///
let highestoccurence = personnel.filter(function (el) {
  return el.pilotingScore === maxPilot;
});

console.log("maxscore", highestoccurence);
let lowestoccurence = personnel.filter(function (el) {
  return el.pilotingScore === minShootingScore;
});

console.log("minscore", lowestoccurence);
