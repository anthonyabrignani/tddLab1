function translate(string) {
  string = string.toLowerCase();

  let vowels = ["a", "e", "i", "o", "u"];

  if (vowels.indexOf(string[0]) > -1) {
    return string + "way";
  } else {
    let firstMatch = string.match(/[aeiou]/g) || 0;
    let firstVowel = string.indexOf(firstMatch[0]);
    return string.substring(firstVowel) + string.substring(0, firstVowel) + "ay";
  }
}

module.exports.translate = translate;
