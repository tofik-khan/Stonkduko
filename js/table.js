class Table {
	const MANUAL = 0; //flag for solid input, user's input goes to userArray
	const SEMI_AUTO = 1; //flag for semi auto; user can select multiple cells for input
	const PENCILED = 2;  //flag for penciled input. input will go to pencilArray

	const GOOD = 1; //flag for when element of userArray matches the corresponding element of elementArray
	const BAD = 0; //flag for when element of userArray doesn't match the corresponding element of the elementArray

	constructor ()
	{
		this.elementArray[81] = generatePuzzle(); //creates an unambiguous solved puzzle
		this.userArray[81]; //stores the user's selected solutions
		this.pencilArray[81][9]; //stores user's penciled numbers for each cell on table
		this.inputFlag = MANUAL; //Start in solid input

		this.selectedNumber = 0; //the number user has selected for semiAuto input

	}

	generatePuzzle(){
		//Cub-Cub's code goes here...
	}

	validate() {
		/* Take the elementArray and compare that to the userArray,
		 it then returns an array with GOOD or BAD depending on
		 whether user's input matched the elementArray */
		 var returnArray[];
		 for (var i = 0; i < this.elementArray.lenght(); i++) {
		 	if(elementArray[i] == userArray[i]) {
		 		returnArray.push(GOOD);
		 	}
		 	else{
		 		returnArray.push(BAD);
		 	}
		 }
	}

	setInput(userinput, location) {
		if (this.inputFlag == MANUAL) {
			//If the flag is set to Manual, enter input in elementArray
			elementArray[location] = userinput;
		}
		else if (userinput == PENCILED) {
			//If the flag is set to Penciled, enter input in pencilArray
			pencilArray[location].push(this.selectedNumber);
		}
	}
}