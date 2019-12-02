//Caleb Hallier
//Runtime Terror

var puzzleArray = [];
var rows = 9;
var columns = 9;

fill2DimensionsArray(puzzleArray, rows, columns);

function fill2DimensionsArray(arr, rows, columns){
  for (var i = 0; i < rows; i++) {
    arr.push([0]);
    for (var j = 0; j < columns; j++) {
      arr[i][j] = 0;
    }
  }
}

function checkRow(num, row){
  let k = 0;
  while(k < 9){
    if(puzzleArray[row][k] === num){
      return (1);
    }
    k++;
  }
}

function checkColumn(num, column){
  let k = 0;
  while(k < 9){
    if(puzzleArray[k][column] === num)
      return (1);
    k++;
  }
}

let x = Math.floor((Math.random() * 9) + 1);

let i = 0;
let j = 0;


  while(i < 9) {
    while (j < 9) {
      if (checkRow(x, i) === 1 || checkColumn(x, j) === 1) {
        x = Math.floor((Math.random() * 9) + 1);
      } else {
        puzzleArray[i][j] = x;
        j++;
      }
    }
    console.log("-----------------------------------------------------------------------------------");
    var a = 0;
    while(a < 9){
      console.log(puzzleArray[a]);
      a++;
    }
    //console.log(puzzleArray);
    i++;
    j = 0;
  }


console.log(puzzleArray);

