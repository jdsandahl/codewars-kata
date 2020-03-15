const { removeChar } = require("../src");

describe("removeChar", () => {
  test("removes first and last char of string", () => {
    expect(removeChar('eloquent')).toEqual('loquen');
    expect(removeChar('country')).toEqual('ountr');
    expect(removeChar('person')).toEqual('erso');
    expect(removeChar('place')).toEqual('lac');
  });
});