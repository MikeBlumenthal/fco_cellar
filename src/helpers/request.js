const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  const aPromise = fetch(this.url);
  return aPromise.then(response => response.json() );
};

module.exports = Request;
