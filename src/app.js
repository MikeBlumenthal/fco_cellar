const Cellar = require('./models/cellar.js');
const SelectView = require('./views/select_view.js');
const ListView = require('./views/list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#choices');
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const listView = new ListView();
  listView.bindEvents();


  const cellar = new Cellar();
  cellar.getData();
  cellar.bindEvents();
})
