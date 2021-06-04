const request = require('./node_modules/request');


const fetchBreedDescription = function(breedName, callback) {
  request(`4https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    }
    if (data[0] === undefined) {
      callback('Dawg, that ain\'t no cat', null);
    }
  });
};

module.exports = { fetchBreedDescription };


