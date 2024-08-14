const team = {
    _players: [
      {firstName: 'Jakub', lastName: 'Duke', age: 23},
      {firstName: 'Sandra', lastName: 'Kek', age: 56},
      {firstName: 'Iza', lastName: 'KleKle', age: 12},
    ],
    _games: [
      {opponent: 'Eagles', teamPoints: 45, opponentPoints: 60},
      {opponent: 'Pigletts', teamPoints: 23, opponentPoints: 67},
      {opponent: 'Digglets', teamPoints: 45, opponentPoints: 76},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  