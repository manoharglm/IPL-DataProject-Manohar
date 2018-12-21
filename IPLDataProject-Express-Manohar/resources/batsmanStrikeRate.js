function strikeRateFunction(){
        var deliveries = require('./utils.js').deliveries;
        var storeInObject = require('./utils.js').storeInObject;
        let batsmanStrikeRate = {};
        let ballsFaced={};
        let topStrikeRate=[];

        deliveries.map((delivery) => {
                    storeInObject(delivery.batsman, 1, ballsFaced);
                    storeInObject(delivery.batsman, delivery.batsman_runs, batsmanStrikeRate);
        });
        Object.keys(batsmanStrikeRate).map((key) =>{
            batsmanStrikeRate[key] = ((Number(batsmanStrikeRate[key]) / Number(ballsFaced[key]))*100).toFixed(2);
        });
        let arr= Object.keys(batsmanStrikeRate).sort((a,b) => (batsmanStrikeRate[b]-batsmanStrikeRate[a]));
        arr = arr.splice(0,10);
        arr.map(player => topStrikeRate.push( [ player, parseFloat( batsmanStrikeRate[player] )] ) );

        return topStrikeRate;
}

module.exports = {
    strikeRateFunction:strikeRateFunction
};