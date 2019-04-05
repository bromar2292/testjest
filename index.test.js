const tortoiseRace = require("./index");

describe("how long does it take tortoise B to catch tortoise A?", () => {
  it("should return an array type", () => {
    expect(Array.isArray(tortoiseRace())).toEqual(true);
  });

  it("array contains 3 items", () => {
    expect(tortoiseRace().length).toEqual(3);
  });

  it("all items in array are numbers", () => {
    expect(tortoiseRace().map(value => Number.isInteger(value))).toEqual([
      true,
      true,
      true
    ]);
  });

  it.skip("if tortoise A is faster than tortoise B then null", () => {});
  it.skip("", () => {});
  it.skip("", () => {});
  it.skip("", () => {});
  it.skip("", () => {});
  it.skip("", () => {});
  it.skip("", () => {});
});
