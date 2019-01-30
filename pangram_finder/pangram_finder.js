const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  const alphabetCheck = this.alphabet.map((letter) => {
    if (this.phrase.includes(letter)) {
      return 1;
    }
    else {
      return 0;
    }
  })

  console.log(alphabetCheck);
  return alphabetCheck.every((letter) => {
    return letter === 1;
  });
}

module.exports = PangramFinder;
