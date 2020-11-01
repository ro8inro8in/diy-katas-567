const { getEmployerRole } = require("../src");  
  const employees = [{
    name: 'Satti',
    role: 'Developer'
}, {
    name: 'Jenny',
    role: 'Sales Associate'
}, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
}]

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant');
    expect(getEmployerRole('Satti', employees)).toBe('Developer');
    expect(getEmployerRole('Jenny', employees)).toBe('Sales Associate');
    
  });
      
});



// npm t -- getEmployerRole



//Function with 2 parameters including a employeeName(string) and an employees(array)

///Write a function that takes in an array of objects and a string- which is a name

////And we need to return from the function the employee role 

// e.g  getEmployerRole('Satti', employees) should return 'Developer'