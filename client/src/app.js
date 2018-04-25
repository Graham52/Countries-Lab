const CountryData = require('./models/countries_data.js');
const CountrySelect = require('./views/countryView.js');
const Request = require('./services/request.js');

const handleChangeRequest = function(event) {
    console.log(event);
};


document.addEventListener('DOMContentLoaded', () => {
  const countryData = new CountryData();
  const countriesDropdown = document.querySelector('#countries-dropdown');

  const countrySelect = new CountrySelect(countriesDropdown);
  countryData.getData((countries) => countrySelect.renderSelect(countries));

  countriesDropdown.addEventListener('change', handleChangeRequest);

});
