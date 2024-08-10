// GlobalVariables

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())


//--------------------------------------
// BlockScope - local variables

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }

//console.log(lightWaves);  - 
logVisibleLightWaves()




//--------------------------------------
//Scope Pollution


//const satellite = 'The Moon';
//const galaxy = 'The Milky Way';
let star = 'North Star';

const callMyNightSkys = () => {
  star  = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSkys());
console.log(star); // global variable star was reassigned to 'Sirius'





//Two different outputs

const logVisibleLightWaves_2 = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves_2();