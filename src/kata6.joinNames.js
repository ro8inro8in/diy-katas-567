const joinNames = namesObjArray => {
    const names = namesObjArray.map((person, index) => { 
  
      if (index === namesObjArray.length - 1){
         return `& ${person.name}`
      } else if (index === namesObjArray.length - 2){
         return `${person.name}` 
      } else { 
         return `${person.name},` 
      }
   })

   return names.join(' ');
};

module.exports = joinNames;

