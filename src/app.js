const Cellar = require('./models/cellar.js');

document.addEventListener('DOMContentLoaded', () => {
  const cellar = new Cellar();
  cellar.getData();
})
