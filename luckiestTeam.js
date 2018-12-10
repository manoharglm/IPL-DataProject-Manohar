const fs = require('fs');
let matches = JSON.parse(fs.readFileSync('./resources/matches.json', 'utf8'));
let tossWon = {};
let luckiestTeam={};

matches.forEach(toss => {
    if(tossWon[toss.toss_winner]) tossWon[toss.toss_winner]++;
    else tossWon[toss.toss_winner]=1;
});

let luckiest=Object.keys(tossWon).sort((a,b)=> (tossWon[b]-tossWon[a]));
luckiest.forEach((toss)=> luckiestTeam[toss]=tossWon[toss]);
console.log(luckiestTeam)