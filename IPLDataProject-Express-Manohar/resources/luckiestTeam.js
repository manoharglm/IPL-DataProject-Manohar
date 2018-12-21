
function luckiestTeamFunction(){
    var matches = require('./utils.js').matches;
    var storeInObject = require('./utils.js').storeInObject;
    let tossWon = {};
    let luckiestTeam=[];

    matches.map(match => {
    storeInObject(match.toss_winner, 1, tossWon);
    });
    let arr=Object.keys(tossWon);
    arr.map(team => luckiestTeam.push( [team, tossWon[team]] ) );
    
    return luckiestTeam;
}

module.exports = {
    luckiestTeamFunction:luckiestTeamFunction
};