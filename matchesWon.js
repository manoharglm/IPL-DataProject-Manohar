const fs = require('fs');
let DataBase = fs.readFileSync('./resources/matches.csv', 'utf8');
let matches = DataBase.split("\n");
let matchesPlayed = {};

for (let match = 1; match < matches.length; match++) {
    let matchData = matches[match].split(",");
    let season=matchData[1];
    let winner=matchData[10];
    if (matchesPlayed[matchData[1]]) {
        if (matchesPlayed[season][winner]) {
            matchesPlayed[season][winner]++;
        } else {
            matchesPlayed[season][winner] = 1;
        }
    } else {
        if (season) {
            matchesPlayed[season] = {}
        }
    }
}

console.log(matchesPlayed);