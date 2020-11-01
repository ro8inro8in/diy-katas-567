const { reachDestination } = require("../src");

describe("reachDestination", () => {
 test("returns a string", () => {
    const result = reachDestination(44,10)
    expect(typeof result).toBe("string");
  });

  test("returns string with estimated time of arrival", () => {
      expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.')
      expect(reachDestination(48, 10)).toBe('I should be there in 5 hours.')
      expect(reachDestination(500, 10)).toBe('I should be there in 50 hours.')
  });

});




