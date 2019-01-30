const AnagramFinder = function (word) {
  this.word = word
  this.wordSorted = word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const otherWordsActual = otherWords.filter((otherWord) => {
    if (otherWord !== this.word) {
      return otherWord;
    }
  });

  const sortedArray = otherWordsActual.map((otherWordActual) => {
    return otherWordActual.toLowerCase().split('').sort().join('');
  });

  sortedArray.push("")

  for (var i = 0; i < sortedArray.length; i++) {
    var result = []
    if (sortedArray[i].toLowerCase() === this.wordSorted.toLowerCase()) {
      result.push(otherWordsActual[i]);
    }
    return result;
  }

}

module.exports = AnagramFinder;
