const Cellar = require('./models/cellar.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#choices');
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const cellar = new Cellar();
  cellar.getData();
})
