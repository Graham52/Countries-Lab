const CountrySelect = function(selectElement, container) {
  this.selectElement = selectElement;
  this.container = container;
  this.countries = [];
};


CountrySelect.prototype.addCountry = function (country) {
  this.countries.push(country);
  this.renderContainer(country);
};

CountrySelect.prototype.renderSelect = function (data) {
  console.log(data);
  data.forEach((item, index) => {
    const option = document.createElement('option');
    option.textContent = item.name;
    option.value = index;
    this.selectElement.appendChild(option);
  });
};


CountrySelect.prototype.renderContainer = function (selectedCountry) {
  const option = document.createElement('p');
  option.textContent = selectedCountry.name;
  this.container.appendChild(option);
};

CountrySelect.prototype.clear = function () {
  this.countries = [];
  this.container.innerHTML = '';
};


module.exports = CountrySelect;
