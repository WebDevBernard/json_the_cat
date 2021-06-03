const request = require('./node_modules/request');
const catName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  const data = JSON.parse(body);
   console.log(error);
  if (data[0]) {
    console.log(data[0].description);
  }
  if (data[0] === undefined) {
    console.log('Dawg, this ain\'t no cat!');
  }
});
