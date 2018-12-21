function deathBowlersFuction(){
        var deliveries = require('./utils.js').deliveries;
        var storeInObject = require('./utils.js').storeInObject;
        let bowlersEconomy = {};
        let oversBowled = {};
        let topEconomy = [];

        deliveries.map(delivery => {
            if (delivery.match_id > 15) {
                storeInObject(delivery.bowler, 1, oversBowled);
                storeInObject(delivery.bowler, delivery.total_runs, bowlersEconomy);
            }
        });

        Object.keys(bowlersEconomy).map((key) => {
            bowlersEconomy[key] = (Number(bowlersEconomy[key]) / Number(oversBowled[key])).toFixed(2);
        });
        let arr=Object.keys(bowlersEconomy).sort((a, b) => (bowlersEconomy[a] - bowlersEconomy[b]));
        arr = arr.splice(0,10);
        arr.map(bowler => topEconomy.push( [ bowler, parseFloat( bowlersEconomy[bowler] )] ) );

        var fs = require('fs');

        return topEconomy;
    }
    module.exports = {
        deathBowlersFuction:deathBowlersFuction
    };