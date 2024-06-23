const count = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  let result = word.split("").reduce((accum, curChar) => {
    if (curChar === char) {
      accum++;
    }
    return accum;
  }, 0);
};

console.log(count("MissIssippi", "I"));
