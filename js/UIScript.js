//This id a script that controls the UI

var selected;
var bSelected;

var tab = document.getElementById("board");
var nbt = document.getElementById("npt");

var diffs = ["Easy", "Medium", "Hard", "Expert", "Insane"];
var diffCounter = 1;

var diffDown = document.getElementById("diffEasy");
var diffUp = document.getElementById("diffHard");
var diff = document.getElementById("diff");

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

var sett = document.getElementById("sett");
var setBox = document.getElementById("settingBox");
var fader = document.getElementById("fader");

var setFlag = 0;

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

var play = document.getElementById("go");
var game = document.getElementById("theeGame");
var gBack = document.getElementById("gBack");

play.onclick = function () {
  game.style.display = "block";
  play.textContent = "Resume";
  tab.style.height = tab.clientWidth + "px";
};

gBack.onclick = function () {
  game.style.display = "none";
};

window.onresize = function () {
  tab.style.height = tab.clientWidth + "px";
};

var cells = document.getElementsByClassName("cell");
var i;

for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e){
    if (e.target.style.backgroundColor !== 'rgb(247, 230, 241)') {
      e.target.style.backgroundColor = "#f7e6f1";
      if (selected != null) {
        selected.style.backgroundColor = "transparent";
      }
      selected = e.target;
    }else {
      e.target.style.backgroundColor = "transparent";
      selected = null;
    }
  });
}

var ins = document.getElementsByClassName("nums");

for (i = 0; i < ins.length; i++) {
  ins[i].addEventListener("click", function (e) {
    if (e.target.style.backgroundColor !== 'rgb(166, 99, 114)') {
      e.target.style.backgroundColor = "#a66372";
      if (bSelected != null) {
        bSelected.style.backgroundColor = "#eb5e7c";
      }
      bSelected = e.target;
    }else {
      e.target.style.backgroundColor = "#eb5e7c";
      bSelected = null;
    }
  });
}


//f7bcc9 rc
//f5b0bf sel