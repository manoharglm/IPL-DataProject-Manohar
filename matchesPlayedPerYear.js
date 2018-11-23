const fs = require('fs');
let DataBase=fs.readFileSync('./CsvFiles/matches.csv','utf8');
let matches=DataBase.split("\n");
let matchesWon={};
let matchId=[];

for(let i=1;i<matches.length;i++){
	let matchData=matches[i].split(",");
		if(matchesWon[matchData[1]]){
			matchesWon[matchData[1]]++;
		}else{
			if(matchData[1]){
			matchesWon[matchData[1]]=1;
			}
		}
	}


	console.log(matchesWon);
