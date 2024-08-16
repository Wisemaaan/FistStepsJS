const greetAliens = (aliens) => {
    for(let i = 0; i < aliens.length; i++) {
      console.log('Oh powerful ' + aliens[i] + ', we humans offer our unconditional surrender!')
      //console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`)
        }
  }
  
  

  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens);
  
  

  const convertToBaby = (arr) => {
    let newArray = [];
    for(i = 0; i < arr.length; i++) {
      newArray.push('baby ' + arr[i])
    }
    return newArray;
  }
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 


  
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 




const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

const acceptEverything = (arr) => {
  arr.forEach((element) => console.log(`Ok, I guess I will eat some ${element}.`));

}


declineEverything(veggies);
acceptEverything(veggies);





// Write your code here:
const shoutGreetings = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].toUpperCase() + '!');
    }
    return newArr;
  }
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  //Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  



  const sortYears = (arr) => {
    const reverse = arr.sort((a, b) => b - a);
    return reverse;
  };
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  


  const justCoolStuff = (arr_1, arr_2) => {
    return arr_1.filter(item => arr_2.includes(item));
  }
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  


  const isTheDinnerVegan = (arr) => {
    const plantBased = arr.every(ingredient => ingredient.source === 'plant');
    return plantBased;
  }
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))




  const findMyKeys = (arr) => {
    const whereKeys = arr.indexOf('keys');
    return whereKeys;
  }
  
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  


  const dogFactory = (name, breed, weight) => {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      get breed() {
        return this._breed;
      },
      get weight() {
        return this._weight;
      },
      set name(newName) {
        this._name = newName;
      },
      set breed(newBreed) {
        this._breed = newBreed;
      },
      set weight(newWeight) {
        this._weight = newWeight;
      },
      bark() {
        return 'ruff! ruff!'
      },
      eatTooManyTreats() {
        this._weight++;
      }
    };
  };
  
  const dog = dogFactory('Joe', 'Pug', 27);
  console.log(dog.bark()); 
  dog.eatTooManyTreats();  
  console.log(dog.weight);  
  