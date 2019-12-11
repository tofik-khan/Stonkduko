class User {
	constructor (difficulty) {
		this.difficulty	= difficulty; //reset to get difficulty from user
		this.userTable = new StonkTable ();

	}

	startNewGame() {
		this.userTable.initialTableFill(this.difficulty);
		var score = 0;
		//this.updateHTML_userTable();
		
	}

	// updateHTML_userTable() {
	// 	for (var row = 1; row <= 9; row++) {
	// 		for (var col = 1; col <= 9; col++) {

	// 			var index = (row-1)*9 + (col-1);

	// 			console.log(row.toString()+col.toString());
	// 			document.getElementById(row.toString()+col.toString()).innerHTML = this.userTable.userArray[index];
				
	// 		}
	// 	}
	// }

}