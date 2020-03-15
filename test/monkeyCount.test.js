const { monkeyCount } = require("../src");

describe("monkeyCount", () => {
  test("counts all the monkeys into an array", () => {
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
