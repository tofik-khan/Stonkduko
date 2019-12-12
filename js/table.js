class StonkTable {
	MANUAL = null; //flag for solid input, user's input goes to userArray
	SEMI_AUTO = 0; //flag for semi auto; user can select multiple cells for input
	PENCILED = 2;  //flag for penciled input. input will go to pencilArray

	GOOD = 1; //flag for when element of userArray matches the corresponding element of elementArray
	BAD = 0; //flag for when element of userArray doesn't match the corresponding element of the elementArray

	constructor ()
	{
		this.elementArray = makePuzzle(); //creates an unambiguous solved puzzle
		this.userArray = []; //stores the user's selected solutions
		for (var i = 0; i < 81; i++) {
			this.userArray.push(0);
		}
		this.pencilArray = []; //stores user's penciled numbers for each cell on table
		this.inputFlag = this.MANUAL; //Start in solid input

		this.selectedNumber = 0; //the number user has selected for semiAuto input

	}

	initialTableFill (difficulty) {
		var show = 0; //determines the number of elements to show in the user array
		switch (difficulty) {
			case 0:
				show = 51; //30 40 45 50 55
				break;
			case 1:
				show = 41;
				break;
			case 2:
				show = 36;
				break;
			case 3:
				show = 31;
				break;
			case 4:
				show = 26;
				break;
		}
		
		while (show > 0) {
			var index = Math.floor(Math.random() * Math.floor(81));

			if (this.userArray[index] == 0) {
				this.userArray[index] = this.elementArray[index];
				show--;
			}

		}
	}


	validate() {
		/* Take the elementArray and compare that to the userArray,
		 it then returns an array with GOOD or BAD depending on
		 whether user's input matched the elementArray */
		 var returnArray = [];
		 for (var i = 0; i < this.elementArray.lenght(); i++) {
		 	if(elementArray[i] == userArray[i]) {
		 		returnArray.push(GOOD);
		 	}
		 	else{
		 		returnArray.push(BAD);
		 	}
		 }

		 return returnArray;
	}

	setInput(userinput, coordinate, index) {
		if (this.inputFlag == this.MANUAL) {
			//If the flag is set to Manual, enter input in elementArray
			this.userArray[index] = userinput; //update user array
			document.getElementById(coordinate).value = userinput; //update HTML table
		}
		else if (this.inputFlag == this.PENCILED) {
			//If the flag is set to Penciled, enter input in pencilArray
			this.pencilArray[location].push(this.selectedNumber);
		}
	}

	checkWin() {
		for (var i = 0; i < this.userArray.length; i++) {
			if (this.userArray[i] != this.elementArray[i]) {
				return false;
			}
		}
		return true;
	}
}