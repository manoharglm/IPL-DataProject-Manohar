function powerPlayFunction(){
        var deliveries = require('./utils.js').deliveries;
        var matches = require('./utils.js').matches;
        var storeInObject = require('./utils.js').storeInObject;

        let powerPlay={};
        let topPowerPlay=[];
        let finalsIdobj={};
        let finalsId=[];
        let finalsPlayed={};

        matches.map((match)  => {
            finalsIdobj[match.season]=match.id;
        });
        finalsId=Object.values(finalsIdobj);
        matches.map((match) => {
            if(finalsId.includes(match.id)){
            storeInObject(match.team1, 1, finalsPlayed);
            storeInObject(match.team2, 1, finalsPlayed);
            }
        });
        deliveries.map((delivery) => {
            if(finalsId.includes(delivery.match_id) && delivery.over <= 6){
                    storeInObject(delivery.batting_team, Number(delivery.total_runs), powerPlay);
            }
        });
        Object.keys(powerPlay).sort((a,b) => (powerPlay[b]-powerPlay[a])).map((pp) =>{
                topPowerPlay.push( [pp, parseFloat(powerPlay[pp]/finalsPlayed[pp])]);
        });

        return topPowerPlay;
}

module.exports = {
    powerPlayFunction:powerPlayFunction
};