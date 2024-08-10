const greetWorld = () => {
    return 'Hello, World!';
  }
  

console.log(greetWorld());



const canIVote = (age) => {
  if (age === 18 || age > 18) {
    return true
  } else {
    return false
  }
};

console.log(canIVote(19)) // Should print true
console.log(canIVote(18)) // Should print true
console.log(canIVote(17)) // Should print false



const agreeOrDisagree = (string_1, string_2) => {
    if (string_1 === string_2) {
      return 'You agree!';
    } else {
      return 'You disagree!';
    }
  };

  console.log(agreeOrDisagree("yep", "yep"))
  console.log(agreeOrDisagree("yep", "yeeeeep")) 



  const lifePhase = age => {
    if (age >= 0 && age <= 3) {
      return 'baby';
    } else if (age >= 4 && age <= 12) {
      return 'child';
    } else if (age >= 13 && age <= 19) {
      return 'teen';
    } else if (age >= 20 && age <= 64) {
      return 'adult';
    } else if (age >= 65 && age <= 140) {
      return 'senior citizen';
    } else {
      return 'This is not a valid age';
    }
  };

console.log(lifePhase(5))
console.log(lifePhase(24)) 
console.log(lifePhase(345325)) 
console.log(lifePhase(-2)) 
console.log(lifePhase(17)) 




const finalGrade = (first, second, third) => {
  
    if (first < 0 || first > 100 || second < 0 || second > 100 || third < 0 || third > 100) {
      return 'You have entered an invalid grade.';
    };
    const sum = first + second + third;
    const average = sum / 3;
  
  
    if (average >= 0 && average <= 59) {
      return 'F'; 
    } else if (average >= 60 && average <= 69) {
      return 'D';
    } else if (average >= 70 && average <= 79) {
      return 'C';
    } else if (average >= 80 && average <= 89) {
      return 'B';
    } else if (average >= 90 && average <= 100) {
      return 'A'
    }
  };


console.log(finalGrade(99, 92, 95))
console.log(finalGrade(11, 34, 8))
console.log(finalGrade(-99, 92, 95))
console.log(finalGrade(3, 2, 2))





const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Private', 'Fido'))




const rollTheDice = () => {
      let die1 = Math.floor(Math.random() * 6 + 1)
      let die2 = Math.floor(Math.random() * 6 + 1)
      return die1 + die2
}
  
console.log(rollTheDice());



const calculateWeight =(earthWeight, planet) => {
    if (planet !== 'Mercury' && planet !== 'Venus' && planet !== 'Mars' && planet !== 'Jupiter' && planet !== 'Saturn') {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
    if (planet === 'Mercury') {
      return earthWeight * 0.378;
    } else if (planet === 'Venus') {
      return earthWeight * 0.907;
    } else if (planet === 'Mars') {
      return earthWeight * 0.377;
    } else if (planet === 'Jupiter') {
      return earthWeight * 2.36;
    } else if (planet === 'Saturn') {
      return earthWeight * 0.916;
    }  
  };
  


console.log(calculateWeight(100, 'Mercury'))
console.log(calculateWeight(100, 'Venus'))
console.log(calculateWeight(100, 'Mars'))
console.log(calculateWeight(100, 'Jupiter'))
console.log(calculateWeight(100, 'Saturn'))



const truthyOrFalsy = value => {
    if (value) {
      return true;
    } else {
      return false;
    }
  }

console.log(truthyOrFalsy(true))
console.log(truthyOrFalsy(undefined))
console.log(truthyOrFalsy(false))
console.log(truthyOrFalsy(NaN))
console.log(truthyOrFalsy(-0))
console.log(truthyOrFalsy(''))


const numImaginaryFriends = value => {
    const value_ceil = Math.ceil(value/4);
    return value_ceil;
}

console.log(numImaginaryFriends(10))
console.log(numImaginaryFriends(15000))
console.log(numImaginaryFriends(-20))



const sillySentence = (first, second, third) => {
    return `I am so ${first} because I ${second} coding! Time to write some more awesome ${third}!`
  };

console.log(sillySentence('excited', 'love', 'functions'))



const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(56, 1956));
console.log(howOld(67, 1656));
console.log(howOld(12, 1956));
console.log(howOld(23, 2000));



const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    } else if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.';
    } else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    } else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.';
    } else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.';
    } else if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins';
    } else {
          return 'You are likely not related.';
    }
};


console.log(whatRelation(100))
console.log(whatRelation(14))
console.log(whatRelation(54))
console.log(whatRelation(0))
