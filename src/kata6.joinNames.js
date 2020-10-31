const joinNames = namesObjArray => {
    
   // const theSimpsonsKids = 
   // [{ name: 'Bart' }, // index 0    // theSimpsonsKids.length === 3
   //  { name: 'Lisa' }, // index 1    (theSimpsonKids.length - 2)
   //  { name: 'Maggie'}]; // index 2  (theSimpsonKids.length - 1)

// array.length-1 === the last element in an array

   const names = namesObjArray.map((simpson, index) => { 
  
      if (index === namesObjArray.length - 1){
          return `& ${simpson.name}`
      }
      else if (index === namesObjArray.length - 2){
        return `${simpson.name}`
      }
      else { 
        return `${simpson.name},`
      }
   })

      const result = names.join(' ');
      console.log(result)
      return  result;

};

module.exports = joinNames;

//forEach with concat
// replace split() and . join()

//array.splice(start-index, how-many-elements-to-remove, element-to-insert)

// names.splice(names.length -1, 0,'&')


//array1.map(number => number * 2);

// //array1.map(function(number){
//    return number * 2;
// })

// [ {

//    name: 'Bart'
 
// }, {
 
//    name: 'Lisa'
 
//  }, {
 
//    name: 'Maggie'
 
//  }]


 //names = ['bart', 'lisa', 'maggie']
// let nameString = "";
//   for (let i = 0; i < names.length; i++) {
//      console.log({ nameString })
//        if (i === names.length - 1) {
//           nameString = nameString + '&' + names[i];
//         } else {
//            nameString = nameString + names[i];
//         }
     

//      return nameString;
     
//   }

//   return nameString;

    
   // 
   // return names.toString()
    


// npm t -- joinNames