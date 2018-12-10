var matches = require('./utils.js').matches;
var storeInObject = require('./utils.js').storeInObject;
let tossWon = {};
let luckiestTeam={};

matches.forEach(delivery => {
    storeInObject(delivery.toss_winner, 1, tossWon);
});

Object.keys(tossWon).sort((a, b) => (tossWon[b] - tossWon[a])).forEach((sr) => luckiestTeam[sr] = tossWon[sr]);
console.log(luckiestTeam)