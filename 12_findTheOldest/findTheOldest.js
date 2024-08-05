const findTheOldest = function(people){
   return people.reduce((currentOldest, person) => {
        if(findAge(person) > findAge(currentOldest)){
            return person;
        } else{ return currentOldest;}
    })
}

  
function findAge(person){

     if(person['yearOfDeath']){
            return person['yearOfDeath'] - person['yearOfBirth'];
        } else { 
            const currentYear = new Date().getFullYear();
            return currentYear - person['yearOfBirth'];
         }}
// Do not edit below this line
module.exports = findTheOldest;
