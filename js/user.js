class User {
	constructor (name) {
		this.username = name;
		this.difficulty	= getDifficulty();
		this.userTable = new StonkTable ();

		this.startNewGame();

	}

	getDifficulty() {
		//sets the difficulty for the user

		return 0; //change to return variable difficulty.
	}

	startNewGame() {
		this.userTable.initialTableFill(this.difficulty);

		var score = 0;

		while (this.usertable.checkWin() == false) {
			//keep playing game
			
		}

		
	}

}