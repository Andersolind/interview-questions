 LeetSpeak(input) {
    var alphabet = {
      A: "4",
      a: "4",
      e: "3",
      E: "3",
      i: "1",
      I: "1",
      o: "0",
      O: "0",
      s: "5",
      S: "5",
      t: "7",
      T: "7"
    };

    return input
      .split("")
      .map(letter => alphabet[letter] || letter)
      .join("");
  }
