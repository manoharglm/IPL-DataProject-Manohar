const fs = require('fs');
let DataBase=fs.readFileSync('./CsvFiles/matches.csv','utf8');
let matches=DataBase.split("\n");
let matchId=[];


	let matchIdFunction =function(year){
		for(let j=1;j<matches.length;j++){
			let matchData=matches[j].split(",");
				if(matchData[1]==year){
					matchId.push(matchData[0]);
				}
		}
		return matchId;
	}
		module.exports={
		matchIdFunction:matchIdFunction
	}