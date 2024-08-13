const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting () {
        console.log(`I'm a model ${this.model}, how may I be of service?`);

    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greeting() {
            console.log(`I'm model ${this.model}, how may I be of serive?`);
        }
    }
}


const shinyNewRobot = massProdRobot('TrayHax', true)


const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}


//This keyword

const goat = {
    dietType: 'herbivore',
    makeSound () {
        console.log('meee');
    },
    diet () {
        console.log(this.dietType); // console.log(dietType); - ReferenceError: dietType is not defined
    } 
};

goat.makeSound();
goat.diet();




const machine = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  
  console.log(machine.provideInfo());


  //Arrow function has a global scope.

  const testing_arrow = {
    energyLevel: 100,
    checkEnergy: () => {
        console.log(`Energy is currently at ${this.energyLevel}%.`) //Unfedined
    }
  }

  testing_arrow.checkEnergy();
 

const testing_declatation = {
    energyLevel: 100,
    checkEnergy () {
    console.log(`Energy is currently at ${this.energyLevel}%.`) //It gives proper output
    }
  }

  testing_declatation.checkEnergy();



  //_variable notation means, that you shouldn't change it.

  const next = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! energy is currently at ${this._energyLevel}%.`)
    }
  }


  next.recharge();
  next._energyLevel = 'Something'; //Check the output.
  next.recharge();




  //Getters and Setters



  const machina = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if(typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}%.`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  
  
  console.log(machina.energyLevel);




  const engine = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors (num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }   
  };
  
  
  engine.numOfSensors = 100;
  console.log(engine.numOfSensors);



  //Factory functions


  const robotFactory = (model, mobile) => {
    return {
      model: model, 
      mobile: mobile,
      beep () {
        console.log('Beep Boop');
      },
      back () {
        console.log("I'll be back.");
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  const Arnold = robotFactory('Terminator', true);
  tinCan.beep();
  Arnold.back();


  //Destructured Assignment
  const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };

  
  //const residence = vampire.residence;
  //console.log(residence);
  const { residence } = vampire;
  console.log(residence)