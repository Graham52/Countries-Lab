const CountryView = require('./views/countryView.js');
const CountryData = require('./models/countries_data.js');
const Request = require('./services/request.js');

const request = new Request('http://localhost:3000/api/countries');

const appStart = function() {

  const addCountryToBucketList = function(selectedCountry) {
    countryView.addCountry(selectedCountry);
  }

  const onCountrySelected = function(event) {
    const selectedIndex = event.target.value;
    const selectedCountry = countryData.data[selectedIndex];
    request.post(addCountryToBucketList, selectedCountry);
  }

  const onDataGot = function(data) {
    countryView.renderSelect(data);
  }

  const onCountriesRequestComplete = function(allCountries) {
    allCountries.forEach((country) => {countryView.addCountry(country)});
  }

  request.get(onCountriesRequestComplete);
  //   const countriesDropdown = document.querySelector('#countries-dropdown');

  const countrySelect = document.querySelector('#countries-dropdown');
  countrySelect.addEventListener('change', onCountrySelected);

  const countryContainer = document.querySelector('#bucket-list');
  const countryView = new CountryView(countrySelect, countryContainer);

  const countryData = new CountryData('https://restcountries.eu/rest/v2/all');
  countryData.getData(onDataGot);

}

document.addEventListener('DOMContentLoaded', appStart);
///
