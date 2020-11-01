const reachDestination = (distance, speed) => {
   const answer = distance / speed; 
   const answerRounded = (Math.ceil(answer * 2) / 2);  
   return `I should be there in ${answerRounded} hours.`
};

module.exports = reachDestination;






