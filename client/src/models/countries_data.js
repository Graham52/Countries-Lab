const Request = require('../services/request.js');

const CountryData = function (url) {
  // this.url = 'https://restcountries.eu/rest/v2/all';
  this.url = url;
  this.data = null;
};

CountryData.prototype.getData = function (onComplete) {
  const request = new Request(this.url);
  request.get((response) => {
    console.log(response);
    this.data = response;
    onComplete(response);
  });
};


module.exports = CountryData
