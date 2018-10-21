let OctoCatCrawler = require('octocat-images');
let crawler = new OctoCatCrawler();
const fs = require('fs');
let octocat = {};

crawler.list((err, octocats) => {
  if (err) {
    throw err;
  } else {
    Object.assign(octocat, octocats)
    octocat = JSON.stringify(octocat)
    fs.writeFileSync('./octocatImages.json', octocat);
  }
});
