const fs = require('fs');
var matchId = require('./utils.js').matchIdFunction(2016);
let DataBase = fs.readFileSync('./resources/deliveries.csv', 'utf8');
let deliveries = DataBase.split("\n");
let extras = {}

for (let i = 1; i < deliveries.length; i++) {
    let matchData = deliveries[i].split(",");
    let deliveryId = matchData[0];
    let bowlingTeam = matchData[3];
    let extraRuns = matchData[16];
    if ((parseInt(deliveryId) >= matchId[0]) && parseInt(deliveryId) <= matchId[matchId.length - 1]) {
        if (extras[bowlingTeam]) {
            extras[bowlingTeam] = Number(extras[bowlingTeam]) + Number(extraRuns);
        } else {
            extras[bowlingTeam] = Number(extraRuns);
        }
    }
}
console.log(extras);