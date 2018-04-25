const CountrySelect = function(container) {
  this.container = container;
};

CountrySelect.prototype.renderSelect = function (data) {
  console.log(data);
  data.forEach((item, index) => {
    const option = document.createElement('option');
    option.textContent = item.name;
    option.value = index;
    this.container.appendChild(option);
  });
};

module.exports = CountrySelect;
