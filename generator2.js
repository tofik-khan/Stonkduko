let puzzleArray = [];
let rows = 9;
let columns = 9;
let N = 9;
let SRN = 3;
fill2DimensionsArray(puzzleArray, rows, columns);

function fill2DimensionsArray(arr, rows, columns){
  for (let i = 0; i < rows; i++) {
    arr.push([0]);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = 0;
    }
  }
}

function fillBox(cord1, cord2){
  let row = cord1;
  let col = cord2;
  const boxArray = [];
  while(row < (cord1 + 3)){
    let x = Math.floor((Math.random() * 9) + 1);
    while(col < cord2 + 3){
      if (boxArray.includes(x)){
        x = Math.floor((Math.random() * 9) + 1);
      }
      else{
        puzzleArray[row][col] = x;
        boxArray.push(x);
        col++;
      }
    }
    row++;
    col = cord2;
  }
}

function checkRow(num, row){
  let k = 0;
  while(k < 9){
    if(puzzleArray[row][k] === num){
      return (false); //unsafe
    }
    k++;
  }
  return (true); //safe
}

function checkColumn(num, column){
  let k = 0;
  while(k < 9){
    if(puzzleArray[k][column] === num)
      return (false);
    k++;
  }
  return (true);
}

function checkBox(num, row, col){

}

function fillRemaining(i, j)
{
  //  System.out.println(i+" "+j);
  if (j>=N && i<N-1)
  {
    i = i + 1;
    j = 0;
  }
  if (i>=N && j>=N)
    return true;

  if (i < SRN)
  {
    if (j < SRN)
      j = SRN;
  }
  else if (i < N-SRN)
  {
    if (j===(int)(i/SRN)*SRN)
      j =  j + SRN;
  }
  else
  {
    if (j == N-SRN)
    {
      i = i + 1;
      j = 0;
      if (i>=N)
        return true;
    }
  }

  for (let num = 1; num<=N; num++)
  {
    if (CheckIfSafe(i, j, num))
    {
      puzzleArray[i][j] = num;
      if (fillRemaining(i, j+1))
        return true;

      puzzleArray[i][j] = 0;
    }
  }
  return false;
}


fillBox(0,0);
fillBox(3,3);
fillBox(6,6);
console.log(puzzleArray);
fillRest();
console.log(puzzleArray);
