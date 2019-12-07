class User {
	constructor (name) {
		this.username = name;
		this.difficulty	= getDifficulty();
		this.userTable = new StonkTable ();

		this.startNewGame();

	}

	getDifficulty() {
		//sets the difficulty for the user

		return; //change to return variable difficulty.
	}

	startNewGame() {
		this.userTable.initialTableFill(this.difficulty);

		var score = 0;

		while (table.checkFull() == false) {
			//keep playing game
		}

		
	}

}