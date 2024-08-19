

//Basic loop - type of data ARRAY, STRING, FUNCTION ARGUMENTS, DOM NODES
//I = 0 MEANS THAT YOU START WITH INDEX 0, THATS WHY YOU USE DATATYPES WITH INDEX.


for (let i = 0; i < 10; i++) {
    console.log(i)
}

for(let i = 9; i >= 0; i--) {
    console.log(i)
}


//ARRAY

const myArray = ['a', 'b', 'c', 'd', 1, 567, 5656.22];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}


//ARRAY REVERSE

for(let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i])
}


for(let i = 0; i < myArray.length; i+=2)
    console.log(myArray[i])


for(let i = myArray.length -1; i >= 0; i-=2) {
    console.log(myArray[i])
}



//STRING

const myString = 'Something to test'

for(let i = 0; i < myString.length; i++) {
    console.log(myString[i])
}


//FUNCTION ARGUMENTS - ARGUMENTS KEYWORD

function myFunc() {
    for(i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

myFunc(1,2,3);



const calculations = [1,2,3,4,5];
const results = [];

for(let i = 0; i < calculations.length; i++) {
    let myVariable = calculations[i] * 2;
    results.push(myVariable)
}
console.log(results)





myObject = {
    name: 'Jakub', 
    lastName: 'Paprika',
    credidCard: [12341234,1234124,567567,7878],
    age: 34,
    simpleFunction () {
        console.log('Make some noise')
    }
}


myObject.simpleFunction();
console.log(myObject.name);
console.log(myObject.lastName);
console.log(myObject.credidCard);
console.log(myObject.age);


console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));



for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}