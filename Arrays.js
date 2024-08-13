const hobbies = ['first', 'second', 'third'];
console.log(hobbies);


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem =  famousSayings[0];
const listItem_2 = famousSayings[2];

console.log(listItem, listItem_2);
console.log(listItem);
console.log(listItem_2);

console.log(famousSayings[2]);
console.log(famousSayings[3]); // Undefined, out of range.



let groceryList = ['bread', 'tomatoes', 'milk'];
console.log(groceryList);
groceryList[1] = 'avocados';
console.log(groceryList);




let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha']; //can be reassigned 

console.log(condiments);
condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo']; // reassigned whole list
console.log(condiments);


const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork']; //cannot be reassigned

utensils[3] = 'Spoon'; //It works but..
console.log(utensils);
//utensils = ['Mayo', 'Onions']; TypeError: Assignment to constant variable.
//console.log(utensils);



const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);



const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('do the arrays', 'improvise, adapt, overcome');
console.log(chores);




const chores_2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
const remove_chores =  chores_2.pop(); //Removes the last element from the list
console.log(chores_2);





const musicGenres = [
    ['Rock', 'Pop', 'Country'],
    ['Soul', 'Hip Hop', 'Reggae'],
    ['Folk', 'Classical', 'Electronic'],
  ];

// The first bracket specifies the index of the nested list, and the second specifies the index of the item within that list.

console.log(musicGenres[0][0]);
console.log(musicGenres[1][0]);
console.log(musicGenres[2][0]);

console.log(musicGenres[0][0][0]); // Bracked nr 3 describes the first letter of the item
console.log(musicGenres[1][0][0]); 


const nestedArray = [
    [
      ['Rock', 'Pop'],
      ['Country', 'Hip Hop'],
    ],
    [
      ['Soul', 'Classic'],
      ['Electronic', 'Folk'],
    ],
  ];



console.log(nestedArray[0][0][0]);
console.log(nestedArray[1][0][0]);





//Arrays functions


const array = [1, 2, 3, 4, 5];
const firstElement = array.at(-1);

console.log(firstElement);


const groceryList_2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

const removed = groceryList_2.shift();
console.log('Removed item:', removed);

console.log('Rest of the list:', groceryList_2);


const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = newArr => {
  newArr.pop();
} 

removeElement(concept);
console.log(concept);