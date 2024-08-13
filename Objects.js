let fasterShip = {
    Fuel_Type: 'Turbo Fuel',
    color: 'silver'
  };


fasterShip.Fuel_Type;
fasterShip.color;


let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;
  spaceship["Fuel Type"];

  // Objects are mutable meaning we can update them after we create them!


  let spaceship_1 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship_1.color = 'glorious gold';
  spaceship_1.numEngines = 2;
  delete spaceship_1['Secret Mission'];


  console.log(spaceship_1);



  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
} 

alienShip.retreat();
alienShip.takeOff();




//Nested objects


let spaceship_2 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  
  let capFave = spaceship_2.crew.captain['favorite foods'][0];
  spaceship_2.passengers = [{ name: 'Nikita' }];
  let firstPassenger = spaceship_2.passengers[0];
  console.log(firstPassenger);
  console.log(capFave);
  


// Objects are passed by refrance

const something = {
    homePlanet : 'Earth',
    color : 'silver'
};


let paintIt = obj => {
    obj.color = 'glorious gold'
};
console.log(something.color);
//Function paintIt permanetly changed the colour
paintIt(something);
console.log(something.color);



let test = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam () { console.log('You got this') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree () { console.log('I agree, captian!') } 
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log('Jets on') }
        },
        translator: {
            name: 'Tilde', 
            degree: 'Conversation Science',
            powerFuel () { console.log('The tank is full') }
        }
    }
};



for (let member in test.crew) {
    console.log(`${member}: ${test.crew[member].name} - [degree] - ${test.crew[member].degree}`);
}