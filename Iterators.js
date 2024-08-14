
//forEach

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit) {
  console.log('I want to eat a ' + fruit);
});


//Arrow function
fruits.forEach(item => console.log('I want to eat a ' + item));


//Map

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(function(first){
  return first[0];
})

const secretMessage_2 = animals.map(first => {
  return first[0];
})

console.log(secretMessage.join(''));
console.log(secretMessage_2.join(''));


const bigNumbers = [100, 200, 300, 400, 500];


const smallNumbers = bigNumbers.map(function(number) {
  return number / 100;
})

const smallNumbers_2 = bigNumbers.map(number => {
  return number / 100;
});

console.log(smallNumbers);
console.log(smallNumbers_2);




const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const smallNumberss = randomNumbers.filter(function(number) {
  return number < 250;
});

const smallNumberss_2 = randomNumbers.filter(number => {
  return number < 250;
});


console.log(smallNumberss);
console.log(smallNumberss_2);


const longFavoriteWords = favoriteWords.filter(function(word){
  return word.length > 7;
});

const longFavoriteWords_2 = favoriteWords.filter(word => {
  return word.length > 7;
});

console.log(longFavoriteWords);
console.log(longFavoriteWords_2);




const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalss.findIndex(function(animal){
  return animal === 'elephant';
});

const foundAnimal_2 = animalss.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);
console.log(foundAnimal_2);



const startsWithS = animalss.findIndex(function(word){
  return word[0] === 's';
});

const startWithS_2 = animalss.findIndex(word => {
  return word[0] === 's';
});


console.log(startsWithS);
console.log(startWithS_2);



const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;

},10);

console.log(newSum);