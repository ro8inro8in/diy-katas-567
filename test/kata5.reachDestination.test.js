const { reachDestination } = require("../src");

describe("reachDestination", () => {
 test("returns a string", () => {
    const result = reachDestination(44,10)
    expect(typeof result).toBe("string");
  });
//   test("round up result to the nearest half hour", () => {
//     //const result = reachDestination(44,10)
//     expect(reachDestination(44, 10)).toBe(4.5);
//     expect(reachDestination(42, 10)).toBe(4.5);
   
//   });

  
  test("returns string with estimated time of arrival", () => {
      expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.')
      expect(reachDestination(48, 10)).toBe('I should be there in 5 hours.')
      expect(reachDestination(500, 10)).toBe('I should be there in 50 hours.')
  });

});


// divide distance (44) by speed (10)
//-----------------------------------------------------------------------------------
//round up the result (4.4) to the nearest 0.5 hours (half an hour). (4.4 --> 4.5)

// T
// return the string with the result in it `I should be there in (4.5) hours`


