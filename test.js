const { TestScheduler } = require("@jest/core");
const { translate } = require("./index");

describe("translator", () => {
  test("lowercase starts with vowel", () => {
    let result = translate("omni");
    expect(result).toEqual("omniway");
  });

  test("lowercase starts with 2 vowels", () => {
    let result = translate("eerie");
    expect(result).toEqual("eerieway");
  });

  test("lowercase starts with capital vowel", () => {
    let result = translate("Infantry");
    expect(result).toEqual("infantryway");
  });

  test("lowercase starts with capital vowel", () => {
    let result = translate("Anthony");
    expect(result).toEqual("anthonyway");
  });

  test("uppercase conversion, also starts with vowel", () => {
    let result = translate("URALS");
    expect(result).toEqual("uralsway");
  });

  test("starts with 1 consonant", () => {
    let result = translate("gamble");
    expect(result).toEqual("amblegay");
  });

  test("starts with 1 consonant", () => {
    let result = translate("gamble");
    expect(result).toEqual("amblegay");
  });

  test("starts with 2 consonants", () => {
    let result = translate("create");
    expect(result).toEqual("eatecray");
  });

  test("starts with 3 consonants", () => {
    let result = translate("shrinking");
    expect(result).toEqual("inkingshray");
  });
});
