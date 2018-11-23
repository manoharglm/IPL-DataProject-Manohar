const fs = require('fs');
var  matchId = require('./utils.js').matchIdFunction(2016);
let DataBase=fs.readFileSync('./CsvFiles/deliveries.csv','utf8');
let deliveries=DataBase.split("\n");
let extras={}
		for(let i=1;i<deliveries.length;i++){
			let matchData=deliveries[i].split(",");
				if((parseInt(matchData[0])>=matchId[0]) && parseInt(matchData[0])<=matchId[matchId.length-1]){
					if(extras[matchData[2]]){
						extras[matchData[2]]=Number(extras[matchData[2]])+Number(matchData[16]);
					}
					else{
						extras[matchData[2]]=Number(matchData[16]);
					}
				}
		}
console.log(extras);
