const getEmployerRole = (employeeName, employees) => {
   return employees.find(emp => emp.name === employeeName).role;   
};


module.exports = getEmployerRole;





//Function with 2 parameters including a employeeName(string) and an employees(array)

///Write a function that takes in an array of objects and a string- which is a name

////And we need to return from the function the employee role 

// e.g  getEmployerRole('Satti', employees) should return 'Developer'