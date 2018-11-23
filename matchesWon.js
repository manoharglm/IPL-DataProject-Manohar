const fs = require('fs');
let DataBase=fs.readFileSync('./CsvFiles/matches.csv','utf8');
let matches=DataBase.split("\n");
let matches_played={};

for(let i=1;i<matches.length;i++){
  let match_data=matches[i].split(",");
    if(matches_played[match_data[1]]){
    		if(matches_played[match_data[1]][match_data[10]]){
    			matches_played[match_data[1]][match_data[10]]++;
    		}else{
    				matches_played[match_data[1]][match_data[10]]=1;
    		}
    }else{
    	if(match_data[1]){
      		matches_played[match_data[1]]={}
      	}
    }
   }
    
  console.log(matches_played);

