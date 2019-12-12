//This id a script that controls the UI
console.log("O  /\\/\\/->");
console.log("|  STONKS");

let selected;
let bSelected;
let player;

let tab = document.getElementById("board");
let nbt = document.getElementById("npt");

let diffs = ["Easy", "Medium", "Hard", "Expert", "Insane"];
let diffCounter = 1;

let diffDown = document.getElementById("diffEasy");
let diffUp = document.getElementById("diffHard");
let diff = document.getElementById("diff");



//// Select Difficulty ////

diffUp.onclick = function () {
  diffCounter++;

  if (diffCounter === 5) {
    diffCounter = 0;

  }

  diff.textContent = diffs[diffCounter];

};

diffDown.onclick = function () {
  diffCounter--;

  if (diffCounter === -1) {
    diffCounter = 4;

  }

  diff.textContent = diffs[diffCounter];

};



//// Setting Box Animation ////

let sett = document.getElementById("sett");
let setBox = document.getElementById("settingBox");
let fader = document.getElementById("fader");

let setFlag = 0;

sett.onclick = function () {

  if (setFlag === 0) {
    setBox.style.height = "200px";
    setFlag = 1;
    fader.style.transitionDelay = ".3s";
    sett.style.borderBottomRightRadius = "0px";
    sett.style.borderBottomLeftRadius = "0px";
    fader.style.opacity = "1";
    setBox.style.transitionDelay = ".2s";

  }else {
    setBox.style.height = "0px";
    setFlag = 0;
    fader.style.transitionDelay = "0";
    sett.style.borderBottomRightRadius = "8px";
    sett.style.borderBottomLeftRadius = "8px";
    fader.style.opacity = "0";
    setBox.style.transitionDelay = ".4s";

  }
};



//// Start Game ////

let play = document.getElementById("go");
let game = document.getElementById("theeGame");
let gBack = document.getElementById("gBack");

play.onclick = function () {
  game.style.display = "block";
  tab.style.height = tab.clientWidth + "px";

  if (play.textContent == "Start Game") {
    player = new User(diffCounter);
    player.startNewGame();
    fillTable();

  }

  play.textContent = "Resume";

};



//// Back to Menu ////

gBack.onclick = function () {
  game.style.display = "none";

};



//// Fixes Table when Resized ////

window.onresize = function () {
  tab.style.height = tab.clientWidth + "px";

};



//// Game Play and Input ////

//init table cells
let cells = document.getElementsByClassName("cell");
let i;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e){
    checkCellInput(e);

  });
}

//init input buttons
let ins = document.getElementsByClassName("nums");

for (let i = 0; i < ins.length; i++) {
  ins[i].addEventListener("click", function (e) {
    checkButtonInput(e);

  });
}



//// Winning ////

let win = document.getElementById("val");

win.onclick = function () {

  if (player.userTable.checkWin()) {
    initiateStonks();

  }
};

//// Functions ////

let solid = [];

//init game board
function fillTable () {

  for (let i=0; i < cells.length; i++) {

    if (player.userTable.userArray[i] != 0) {
      cells[i].textContent = player.userTable.userArray[i];
      solid[i] = 0;

    }else {
      solid[i] = 1;

    }
  }
}

let manSel = null;
let semSel = null;
let semCellSel = null;
let semi = 0;
let arraySpot = null;

//handles "manual" input method
function checkCellInput (e) {

  if (semi == 0) {

    if (manSel != e.target) {
      //console.log("engage maual mode");

      if (manSel != null) {
        manSel.style.backgroundColor = "transparent";

      }

      manSel = e.target;
      manSel.style.backgroundColor = "#f7e6f1";

    }else {
      //console.log("disengage manual mode");
      manSel.style.backgroundColor = "transparent";
      manSel = null;
      
    }

  }else { 
    //console.log("input num");

    if (checkSolidNum(e.target)){
      e.target.textContent = semi;
      player.userTable.userArray[arraySpot] = semi;

      if (semCellSel != null) {
        semCellSel.style.backgroundColor = "transparent";
        semCellSel = e.target;
        semCellSel.style.backgroundColor = "#f7e6f1";

      }else {
        semCellSel = e.target;
        semCellSel.style.backgroundColor = "#f7e6f1";

      }
    }
  }
}

//handles "semi-auto" input method
function checkButtonInput (e) {

  if (manSel == null) {
    
    if (semSel != e.target) {
      //console.log("engage semi mode");

      if (semSel != null) {
        semSel.style.backgroundColor = "#eb5e7c";

      }

      semSel = e.target;
      semSel.style.backgroundColor = "#a66372";
      semi = semSel.value;

    }else {
      //console.log("disengage semi mode");
      semSel.style.backgroundColor = "#eb5e7c";
      semSel = null;
      semi = 0;

      if (semCellSel != null) {
        semCellSel.style.backgroundColor = "transparent";
        semCellSel = null;

      }
    }

  }else {
    //console.log("input num");

    if (checkSolidNum(manSel)){
      manSel.textContent = e.target.value;
      player.userTable.userArray[arraySpot] = e.target.value;

    }
  }
}

function checkSolidNum (e) {

  for (let i = 0; i < cells.length; i++){

    if (e == cells[i]) {
      arraySpot = i;
      return(solid[i]);

    }
  }
}

function initiateStonks () {

  for (let i = 27; i < 54; i++) {
    cells[i].textContent = "+";

  }

  cells[37].textContent = "S";
  cells[38].textContent = "T";
  cells[39].textContent = "O";
  cells[40].textContent = "N";
  cells[41].textContent = "K";
  cells[42].textContent = "S";
  cells[43].textContent = "!";

}