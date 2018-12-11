request = require('request');
const fs = require('fs');
const yargs = require('yargs')
const assets = require('./assets')
//VersionOneToken 1.f/4ay5oOOfXtLK6dtKBkg6EpGuk=
//Epic Example 424499
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'asset',
      describe: 'VersionOne Asset',
      string: true
    },
    id:{
      demand: false,
      describe: 'asset Id',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

configureUrl = (assetType, assetId) => {
  if(assetId){
    var urlDynamic = `https://www14.v1host.com/Laureate/VersionOne/rest-1.v1/Data/${assetType}/${assetId}`;
  } else{
    var urlDynamic = `https://www14.v1host.com/Laureate/VersionOne/rest-1.v1/Data/${assetType}`;
  }
  console.log(urlDynamic)
  return urlDynamic;
}

var loadAssets = () => {
  console.log(argv)
  url = configureUrl(argv.a, argv.id)
  assets.getAssets(url);
}

loadAssets();

