const fs = require('fs');
let DataBase = fs.readFileSync('./resources/matches.csv', 'utf8');
let matches = DataBase.split("\n");
let matchesWon = {};
let matchId = [];

for (let i = 1; i < matches.length; i++) {
    let matchData = matches[i].split(",");
    let season=matchData[1];
    if (matchesWon[season]) {
        matchesWon[season]++;
    } else {
        if (season) {
            matchesWon[season] = 1;
        }
    }
}
console.log(matchesWon);