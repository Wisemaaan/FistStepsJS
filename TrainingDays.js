const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3); // Generates random number from 0 to 2.
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon ';
    }
};


const getTrainingDays = event => {
    let days;                        // The days variable is defined but not yet assigned a value. - UNDEFINED
    if (event === 'Marathon') {     // The value is assigned depending on the condition.
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days; // We return the value of the days variable.
};


const name = 'Nala'; // Assigning the global scope.

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};


const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};


const event = getRandEvent(); // Assigning the getRandEvent function as a variable.
const days = getTrainingDays(event);


logEvent(name, event);
logTime(name, days);



const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);