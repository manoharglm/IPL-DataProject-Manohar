var deliveries = require('./utils.js').deliveries;
var storeInObject = require('./utils.js').storeInObject;
let bowlersEconomy = {};
let oversBowled = {};
let topEconomy = [];

deliveries.forEach(delivery => {
    if (delivery.match_id > 15) {
        storeInObject(delivery.bowler, 1, oversBowled);
        storeInObject(delivery.bowler, delivery.total_runs, bowlersEconomy);
    }
});

Object.keys(bowlersEconomy).forEach((key) => {
    bowlersEconomy[key] = (Number(bowlersEconomy[key]) / Number(oversBowled[key])).toFixed(2);
});
let arr=Object.keys(bowlersEconomy).sort((a, b) => (bowlersEconomy[a] - bowlersEconomy[b]))
let flag=0;
for (let bowler in arr){
    if(flag>10) break;
    if(oversBowled[arr[bowler]]>10){
        flag++;
        topEconomy.push( [arr[bowler], parseFloat(bowlersEconomy[arr[bowler]])]);
    }
}

var fs = require('fs');

fs.writeFile('topDeathBowler.json', JSON.stringify(topEconomy), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
console.log(topEconomy);