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

function checkRow(num, row) {
  let k = 0;
  while (k < 9) {
    if (puzzleArray[row][k] === num) {
      return false; //unsafe
    }
    k++;
  }
  return true; //safe
}

function checkColumn(num, column) {
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

  while (j < (startCol + 3)) {
    while (i < (startRow + 3)) {
      if (puzzleArray[i][j] === num)
        return false; //indicate that this is not a safe location for the given num
      i++
    }
    i = startRow;
    j++;
  }
  return true; //indicate that it is safe to input number.
}

function checkIfSafe(row, col, num) {
  if (puzzleArray[row][col] !== 0){
    return false;
  }
  return (checkColumn(num, col) && checkRow(num, row) && checkBox(num, row, col));
}

function fillRemaining(i, j) {
  if (j === 9 && i < 8) {
    i++;
    j = 0;
  }

  if(i < 3 && j === 0){
    j = j + 3;
  }
  if(i < 6 && i > 2 && j === 3 ) {
    j = j + 3;
  }
  if (i === 8 && j === 6)
    return true;
  if(i > 5 && j === 6){
    i++;
    j = 0;
  }
  for (let num = 1; num <= 9; num++) {
    if (checkIfSafe(i, j, num)) {
      puzzleArray[i][j] = num;
      if (fillRemaining(i,j + 1))
        return true;
      puzzleArray[i][j] = 0;
    }
  }
  return false;
}

fillBox(0, 0);
fillBox(3, 3);
fillBox(6, 6);
console.log(puzzleArray);
console.log("---------------------------------------------------");
console.log(fillRemaining(0, 3));
console.log(puzzleArray);
