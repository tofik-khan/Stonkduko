class User {
	constructor (name) {
		this.username = name;
		this.difficulty	= this.getDifficulty(); //reset to get difficulty from user
		this.userTable = new StonkTable ();

	}

	getDifficulty() {
		//sets the difficulty for the user

		return 0; //change to return variable difficulty.
	}

	startNewGame() {
		this.userTable.initialTableFill(this.difficulty);
		this.updateHTML_userTable();
		var score = 0;

		while (this.userTable.checkWin() == false) {
			//keep playing game
			this.getInput();
			
		}

		
	}

	updateHTML_userTable() {
		for (var row = 1; row <= 9; row++) {
			for (var col = 1; col <= 9; col++) {

				var index = (row-1)*9 + (col-1);

				document.getElementById(row + "" + col).value = this.userTable.userArray[index];
				
			}
		}
	}

	getInput () {

		var coordinate = document.getElementById("location").value;
		console.log(coordinate);
		var n = parseInt(coordinate);
			var row = Math.floor(n/10);
			var col = n%10;

			var index = (row-1)*9 + (col-1);
			this.userTable.setInput(document.getElementById("userinput").value, coordinate, index);
			this.updateHTML_userTable();

	}

}