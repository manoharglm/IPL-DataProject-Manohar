const fs = require('fs');
let DataBase = fs.readFileSync('./resources/deliveries.csv', 'utf8');
let deliveries = DataBase.split("\n");
let bowlersEconomy = {}
let oversBowled = {}
let flag = 0;

for (let delivery = 1; delivery < deliveries.length; delivery++) {
    let deliveryData = deliveries[delivery].split(",");

    let deliveryMatchId = deliveryData[4];
    let bowler = deliveryData[8];
    let overs = deliveryData[4];
    let wideRuns = deliveryData[10];
    let noBallRuns = deliveryData[13];
    let batsmanRuns = deliveryData[15];

    if (parseInt(deliveryMatchId) > 15 && parseInt(deliveryMatchId) <= 20) {

        if (oversBowled[bowler]) {
            if (flag != overs) {
                oversBowled[bowler]++;
                flag = overs;
            }
        } else {
            oversBowled[bowler] = 1;
        }

        if (bowlersEconomy[bowler]) {
            bowlersEconomy[bowler] += (Number(wideRuns) + Number(noBallRuns) + Number(batsmanRuns));

        } else {
            if (bowler) {
                bowlersEconomy[bowler] = Number(wideRuns) + Number(noBallRuns) + Number(batsmanRuns);
            }
        }
    }
}
let keys = Object.keys(bowlersEconomy);
for (let key in keys) {
    bowlersEconomy[keys[key]] = (Number(bowlersEconomy[keys[key]]) / Number(oversBowled[keys[key]]));
}
let topBowlers = Object.keys(bowlersEconomy).sort(function(a, b) {
    return bowlersEconomy[a] - bowlersEconomy[b]
});
let topBowlersEconomy = Object.keys(bowlersEconomy).sort(function(a, b) {
    return bowlersEconomy[a] - bowlersEconomy[b]
}).map(key => bowlersEconomy[key]);

for (let top10 in topBowlers) {
    console.log(topBowlers[top10] + ":" + topBowlersEconomy[top10]);
}