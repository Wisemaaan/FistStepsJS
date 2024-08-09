const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
  
    ) {
      return userInput;
    } else {
      console.log("You can chose only rock, paper or scissors.");
    }
  };

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Its a tie.'
    }


    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'bomb')
    )   {
        return 'You won!';
    } else {
        return 'Computer won!';
    };
}
//console.log(determineWinner('rock', 'scissors'));  
//console.log(determineWinner('rock', 'paper'));     
//console.log(determineWinner('rock', 'rock'));      

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();