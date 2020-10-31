const { joinNames } = require("../src");

describe("joinNames", () => {
  const theSimpsonsKids = 
  [{ name: 'Bart' }, 
   { name: 'Lisa' },
   { name: 'Maggie'}];
   
 const theSimpsonsFamily = 
  [{ name: 'Bart' }, 
   { name: 'Lisa' },  
   { name: 'Maggie' },  
   { name: 'Homer' },
   { name: 'Marge' }];
  
  test("returns string of names, separated by commas and an ampersand &", () => {
    expect(joinNames(theSimpsonsKids)).toBe('Bart, Lisa & Maggie')
    expect(joinNames(theSimpsonsFamily)).toBe('Bart, Lisa, Maggie, Homer & Marge')
  });
  
  

});
