//Caleb Hallier
//CSE320
//Runtime Terror
//12-6/2019

//The following lines set the elements of a 9x9 array to 0;
let puzzleArray = [];
let row = 0;
let col = 0;
while(row < 9){
  puzzleArray.push([0]); //push an array onto the stack, these are the rows
  while (col < 9){
    puzzleArray[row][col] = 0; //populate the values of our rows column by column.
    col++;
  }
  row++; //move to next row.
  col = 0; //reset column
}

//The following function takes the coordinates to the top right corner of a box and then fills the box randomly.
function fillBox(cord1, cord2) {
  let row = cord1;
  let col = cord2;
  while (row < (cord1 + 3)) { //keeps us inside our box
    let x = Math.floor((Math.random() * 9) + 1);
    while (col < cord2 + 3) {
      if (!checkBox(x, row, col)) { // Calls the check box function to see if the number already appeared in the box
        x = Math.floor((Math.random() * 9) + 1); // Fill the box with random numbers.
      } else {
        puzzleArray[row][col] = x;
        col++;
      }
    }
    row++;
    col = cord2;
  }
}

function checkRow(num, row) { // all this does is check all the elements in the current row.
                              // returns true if it is a safe cell
  let k = 0;
  while (k < 9) {
    if (puzzleArray[row][k] === num) {
      return false; //unsafe
    }
    k++;
  }
  return true; //safe
}

function checkColumn(num, column) { // all this does is check all the elements in a given column.
                                    // returns true if it is a safe cell
  let k = 0;
  while (k < 9) {
    if (puzzleArray[k][column] === num)
      return false; //unsafe
    k++;
  }
  return true; //safe
}

function checkBox(num, row, col) {
  let startRow = 0;
  let startCol = 0;
  // there is a case for each box, the box decides the start location to check.
  //box 1
  if (row < 3 && col < 3) {
    startRow = 0;
    startCol = 0;
  }
  //box 2
  else
    if (row < 3 && col < 6) {
      startRow = 0;
      startCol = 3;
    }
    //box 3
    else
      if (row < 3) {
        startRow = 0;
        startCol = 6;
      }
      //box 4
      else
        if (row < 6 && col < 3) {
          startRow = 3;
          startCol = 0;
        }
        //box 5
        else
          if (row < 6 && col < 6) {
            startRow = 3;
            startCol = 3;
          }
          //box 6
          else
            if (row < 6) {
              startRow = 3;
              startCol = 6;
            }
            //box 7
            else
              if (row < 9 && col < 3) {
                startRow = 6;
                startCol = 0;
              }
              //box 8
              else
                if (row < 9 && col < 6) {
                  startRow = 6;
                  startCol = 3;
                }
                //box 9
                else
                  if (row < 9) {
                    startRow = 6;
                    startCol = 6;
                  }

  let i = startRow;
  let j = startCol;

  // similar to the fillBox function we iterate through the whole box just checking the values
  // returns true if the number is not in the box and false if it is in the box.
  while (j < (startCol + 3)) {
    while (i < (startRow + 3)) {
      if (puzzleArray[i][j] === num)
        return false; // indicate that this is not a safe location for the given num
      i++
    }
    i = startRow;
    j++;
  }
  return true; // indicate that it is safe to input number.
}

function checkIfSafe(row, col, num) {
  if (puzzleArray[row][col] !== 0){ // first check if the current cell is already filled
    return false;
  }
  return (checkColumn(num, col) && checkRow(num, row) && checkBox(num, row, col));
}

function fillRemaining(i, j) { // this function recursively fills the remaining 6 boxes
  if (j === 9 && i < 8) { // check if we need to move to the next row.
    i++;
    j = 0;
  }

  // We do not want to attempt to enter values into boxes 1, 5 or 9.
  // To avoid this we first check what range we are in so we can avoid those boxes.
  if(i < 3 && j === 0){ // check if we are going to attempt entering in box 1.
    j = j + 3;
  }
  if(i < 6 && i > 2 && j === 3 ) { // check if we are attempting to entering in box 5.
    j = j + 3;
  }
  if (i === 8 && j === 6) // If we reach this location the puzzle is completed.
    return true; // start to recurse up.
  if(i > 5 && j === 6){ // check if we are trying to enter box 6.
    i++;
    j = 0;
  }

  /*
   The following bit of code will recursively and systematically check every possible solution until one is found
   that will satisfy our puzzle.
   */
  for (let num = 1; num <= 9; num++) {
    if (checkIfSafe(i, j, num)) {
      puzzleArray[i][j] = num;
      if (fillRemaining(i,j + 1))
        return true; // we found a number that fits, so we recurse up.
      puzzleArray[i][j] = 0;
    }
  }
  return false; // we recurse up indicating failure.
}

// The following function puts it all together and maps the two dimensional array to a one dimensional array.
function makePuzzle(){
  fillBox(0, 0);
  fillBox(3, 3);
  fillBox(6, 6);
  fillRemaining(0,3);
  const mappedArray = [];
  let i = 0;
  let j = 0;
  while (i < 9){
    while(j < 9){
      mappedArray.push(puzzleArray[i][j]);
      j++
    }
    j=0;
    i++;
  }
  return mappedArray;
}

