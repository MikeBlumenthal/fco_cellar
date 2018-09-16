const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Cellar = function () {
  this.data = null;
  this.cellar = null;
  this.typeNames = null;
}

Cellar.prototype.getData = function () {
  const url = `https://public.enigma.com/api/snapshots/ff265211-59b7-41ef-b246-f711f5262621?&row_limit=600&row_offset=0&include_serialids=true`;
  const request = new Request(url);
  const dataPromise = request.get();
  dataPromise.then((data) => {
    this.data = data.table_rows.rows;
    this.organise();
    this.getTypes();
    PubSub.publish('Cellar:data-ready', this.typeNames);
  })
}

Cellar.prototype.organise = function () {
  const cellar_objects = [];
  this.data.forEach( (array) => {
    let object = {type: array[0], year: array[1], name: array[2], grade: array[3], instruction: array[4]}
    cellar_objects.push(object)
  })
  this.cellar = cellar_objects;
}

Cellar.prototype.getTypes = function () {
  const allTypes = [];
  this.data.forEach( (array) => {
    let type = array[0];
    allTypes.push(type)
  })
   this.typeNames = allTypes.filter( (type, index, types) => types.indexOf(type) === index);
}

module.exports = Cellar;
