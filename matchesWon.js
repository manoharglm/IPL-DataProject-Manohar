const fs = require('fs');
let DataBase=fs.readFileSync('./CsvFiles/matches.csv','utf8');
let matches=DataBase.split("\n");
let matchesPlayed={};

	for(let match=1;match<matches.length;match++){
  		let matchData=matches[match].split(",");
    	if(matchesPlayed[matchData[1]]){
    		if(matchesPlayed[matchData[1]][matchData[10]]){
    			matchesPlayed[matchData[1]][matchData[10]]++;
    		}else{
    				matchesPlayed[matchData[1]][matchData[10]]=1;
    		}
    	}
    	else{
    		if(matchData[1]){
      			matchesPlayed[matchData[1]]={}
      		}
    	}
    }
    
  console.log(matchesPlayed);

