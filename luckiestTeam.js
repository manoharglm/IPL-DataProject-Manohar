const fs = require('fs');
let DataBase = fs.readFileSync('./resources/matches.csv', 'utf8');
let matches = DataBase.split("\n");
let tossWon = {};
let matchId = [];

for (let i = 1; i < matches.length; i++) {
    let matchData = matches[i].split(",");
    let toss=matchData[6];
    if (tossWon[toss]) {
        tossWon[toss]++;
    } else {
        if (toss) {
            tossWon[toss] = 1;
        }
    }
}

luckiest = Object.keys(tossWon).sort(function(a, b) {
    return (tossWon[b]-tossWon[a]);
});
luckiest=luckiest.map((toss)=> [toss, tossWon[toss]] );
console.log(luckiest);