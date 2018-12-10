request = require('request');
const fs = require('fs');
//VersionOneToken 1.f/4ay5oOOfXtLK6dtKBkg6EpGuk=




loadEpics = (address, callback) =>{
  var urlDynamic = `https://www14.v1host.com/Laureate/VersionOne/rest-1.v1/Data/Epic/424499`;
  request.get({
    url: urlDynamic,
    json:true,
    auth:{
      'bearer': '1.f/4ay5oOOfXtLK6dtKBkg6EpGuk='
    },
    }, (error, response, body) =>{
      console.log('error' + error)
      console.log('response ' + JSON.stringify(response));

fs.writeFile("epic.json", JSON.stringify(response), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
      console.log('Number of results: ', body.length);
      //console.log(response);
      if(error){
        callback('Unable to connect to VersionOneApi.');
      } else if (body.length === 0){
        callback('Unable to find Data.');
      } else if (body.length >= 1){
        callback(undefined, body);
      }
    
    });
}

loadEpics('aa', (error, response) =>{
  if(error){
    console.log(error);
  } else {
    console.log(response);
  }
});