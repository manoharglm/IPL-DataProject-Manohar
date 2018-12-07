const fs = require('fs');
let DataBase = fs.readFileSync('./resources/matches.csv', 'utf8');
let matches = DataBase.split("\n");
let matchId = [];

let matchIdFunction = function(year) {
    for (let match = 1; match < matches.length; match++) {
        let matchData = matches[match].split(",");
        let season = matchData[1];
        let id = matchData[0];

        if (season == year) {
            matchId.push(id);
        }
    }
    return matchId;
}
module.exports = {
    matchIdFunction: matchIdFunction
}