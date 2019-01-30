const IsogramFinder = function (word) {
  this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.length === new Set(this.word).size;
}

module.exports = IsogramFinder;
