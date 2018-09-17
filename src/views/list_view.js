const PubSub = require('../helpers/pub_sub.js');

const ListView = function () {

}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Cellar:selected-ready', (event) => {
    this.display(event.detail);
  })
}

ListView.prototype.display = function (data) {
  console.log(data);
};

module.exports = ListView;
