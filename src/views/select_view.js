const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Cellar:data-ready', (event) => {
    const data = event.detail;
    this.populate(data);
  })
}

SelectView.prototype.populate = function (data) {
  data.forEach( (type) => {
    const choice = document.createElement('li');
    choice.textContent = type;
    choice.id = type;
    this.element.appendChild(choice);
  })
};

module.exports = SelectView;
