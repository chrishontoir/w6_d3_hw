const AnagramFinder = function (word) {
  this.word = word
  this.wordSorted = word.toLowerCase().split('').sort().join('');
}

AnagramFinder.prototype.sorted = function (wordToSort) {
  var sortedWord = wordToSort.split('');
  sortedWord.sort();
  sortedWord.join('');
  return sortedWord;
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

  for (var i = 0; i < sortedArray.length; i++) {
    var result = []
    if (sortedArray[i].toLowerCase() === this.wordSorted.toLowerCase()) {
      result.push(otherWordsActual[i]);
    }
    return result;
  }

  // const final = result.filter((item) => {
  //   if (item === undefined) {
  //     item = ""
  //   }
  // });
  //
  // return final;

}

module.exports = AnagramFinder;
