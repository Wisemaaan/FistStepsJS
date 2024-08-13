//'Manual' loop

const vacationSpots = ['Italy', 'Brazil', 'Japan'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);



//Basic loops, console.log can take more than one argument.

for(let counter = 0; counter <11; counter ++) {
    console.log('Loop numer: ', counter);
};

//Looping in reverse

for(let counter = 10; counter >=0; counter-- ) {
    console.log('Loop numer: ', counter);
};


//Looping through Arrays

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

for(let item = 0; item < animals.length; item++) {
    console.log(animals[item]);
}


const vacation = ['Bali', 'Paris', 'Tulum'];

for ( let i = 0; i < vacation.length; i++) {
    console.log('I would love to visit ' + vacation[i]);
}

const myArray = [6, 19, 20];
const yourArray = [19, 91, 2];

for (let i = 0; i < myArray.length; i++) {
    for(let j = 0; j < yourArray.length; j++) {
        if (myArray[i]===yourArray[j]) {
            console.log('Both arrays have the same number: ' + yourArray[j]);
        }
    }
}




const bobsFollowers = ['Boby', 'Ciri', 'Geralt','Yennefer'];
const tinasFollowers = ['John', 'Geralt', 'Ciri'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);


//The while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//While loop checking the condition before loops starts, do while loops starts the loop and than checking the condition.

let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded ++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);


//Break

for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
  
  console.log('Orange you glad I broke out the loop!');



const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];


for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if ( rapperArray[i] === 'Notorious B.I.G.') {
      break;
    }
}
console.log("And if you don't know, now you know.");



// For... of loop, you can use this if you want to reverse iteration


const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (const pokemon of pokemonList) {
  if (pokemon === 'Yoshi') {
    continue; // Skips the iteration when pokemon is 'Yoshi'
  }
  console.log(`You caught a ${pokemon}!`);
}