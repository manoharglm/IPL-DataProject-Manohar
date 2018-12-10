var deliveries = require('./utils.js').deliveries;
var storeInObject = require('./utils.js').storeInObject;
let bowlersEconomy = {};
let oversBowled = {};
let topEconomy = {};

deliveries.forEach(delivery => {
    if (delivery.match_id > 15) {
        storeInObject(delivery.bowler, 1, oversBowled);
        storeInObject(delivery.bowler, delivery.total_runs, bowlersEconomy);
    }
});

Object.keys(bowlersEconomy).forEach((key) => {
    bowlersEconomy[key] = Number(bowlersEconomy[key]) / Number(oversBowled[key]);
});
Object.keys(bowlersEconomy).sort((a, b) => (bowlersEconomy[a] - bowlersEconomy[b])).forEach((sr) => topEconomy[sr] = bowlersEconomy[sr]);

console.log(topEconomy);