class User {
	constructor (name) {
		this.username = name;
		this.difficulty	= getDifficulty();
		this.userTable = Table ();

		this.startNewGame(this.userTable, this.difficulty)

	}

	getDifficulty() {
		//sets the difficulty for the user
	}

	startNewGame(table, difficulty) {

		var score = 0;

		while (table.checkFull() == false) {
			//keep playing game
		}

		
	}

}