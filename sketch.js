/*
The cube's state is stored as a 6x3x3 array
There are six faces in total:
0 - Front
1 - Up
2 - Down
3 - Right
4 - Left
5 - Back

there are six colours in total:
B - Blue
Y - Yellow
W - White
R - Red
O - Orange
G - Green

Orientation:
Front is blue and up is yellow

All clockwise rotations are clockwise from the angle of looking at the side of the cube.
Same for counterclockwise.
*/

//defines numbers as 6 sides of the cube
var front = 0;
var left = 1;
var back = 2;
var right = 3;
var up = 4;
var down = 5;


var cube = new Array(6);


////////////////////////
//////////SETUP/////////
////////////////////////
function setup() {
   createCanvas(480, 360);
   for (var s = 0; s < 6; s++) { //creates cube, a 6x3x3 array
      cube[s] = new Array(3);
      for (var x = 0; x < 3; x++) {
         cube[s][x] = new Array(3);
      }
   }


   solvedState(cube);
   visualize(cube);

} //setup




function move(move) {
   if (move == "front") {
      F(cube);
      console.log("front, ");
   }
   else if (move == "front inverse") {
      Fi(cube);
      console.log("front inverse, ");
   }
   else if (move == "right") {
      R(cube);
      console.log("right, ");
   }
   else if (move == "right inverse") {
      Ri(cube);
      console.log("right inverse, ");
   }
   else if (move == "left") {
      L(cube);
      console.log("left, ");
   }
   else if (move == "left inverse") {
      Li(cube);
      console.log("left inverse, ");
   }
   else if (move == "back") {
      B(cube);
      console.log("back, ");
   }
   else if (move == "back inverse") {
      Bi(cube);
      console.log("back inverse, ");
   }
   else if (move == "up") {
      U(cube);
      console.log("up, ");
   }
   else if (move == "up inverse") {
      Ui(cube);
      console.log("up inverse, ");
   }
   else if (move == "down") {
      D(cube);
      console.log("down, ");
   }
   else if (move == "down inverse") {
      Di(cube);
      console.log("down inverse, ");
   }
   else console.log("SOMETHING FUCKED UP");
}

function reverseMove(move) {
   if (move == "front") {
      Fi(cube);
      console.log("front, ");
   }
   else if (move == "front inverse") {
      F(cube);
      console.log("front inverse, ");
   }
   else if (move == "right") {
      Ri(cube);
      console.log("right, ");
   }
   else if (move == "right inverse") {
      R(cube);
      console.log("right inverse, ");
   }
   else if (move == "left") {
      Li(cube);
      console.log("left, ");
   }
   else if (move == "left inverse") {
      L(cube);
      console.log("left inverse, ");
   }
   else if (move == "back") {
      Bi(cube);
      console.log("back, ");
   }
   else if (move == "back inverse") {
      B(cube);
      console.log("back inverse, ");
   }
   else if (move == "up") {
      Ui(cube);
      console.log("up, ");
   }
   else if (move == "up inverse") {
      U(cube);
      console.log("up inverse, ");
   }
   else if (move == "down") {
      Di(cube);
      console.log("down, ");
   }
   else if (move == "down inverse") {
      D(cube);
      console.log("down inverse, ");
   }
   else console.log("SOMETHING FUCKED UP");
}

function reverseCube() {
   for (var i = 0; i < allCommandsArray.length; i ++){
      reverseMove(allCommandsArray[allCommandsArray.length - 1 - i]);
   }
}

var countForNext = -1;

function next() {
   countForNext++;
   move(allCommandsArray[countForNext]);
   console.log(countForNext);
   visualize(cube);

}

function previous() {
   if (countForNext > -1) {

      reverseMove(allCommandsArray[countForNext]);
      console.log(countForNext);
      countForNext --;
      visualize(cube);
   }
}






function submitCubeText() {
   let theText = cubeInput.value;
   console.log(theText);

   var count = -1;


   for (var s = 0; s < 6; s++) {
      for (var x = 0; x < 3; x++) {
         for (var y = 0; y < 3; y++) {
            count = s*9 + x*3 + y;
            cube[s][x][y] = theText.charAt(count);
         }
      }
   }

   visualize(cube);
}

function solveInit(){

   solve(cube);
   visualize(cube);

   var x = document.getElementById("divBottonToggleSolveSteps");
   x.style.display = "block";
}

function randomizeInit(){
   randomize(cube);
   visualize(cube);
}


function showInstructions() {
   var x = document.getElementById("instructionsDiv");


   if (x.style.display == "inline-block") {
      x.style.display = "none";
   } else {
      x.style.display = "inline-block";
   }
}

function hideSolution() {
   var x = document.getElementById("divAroundSolution");

   if(x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

function displaySolve() {
   document.getElementById("demo").innerHTML = "(If one of the lines are empty it's because that section is already solved) <br> <b> These rotations  solve the white cross: </b> <br>" + commandSolveWhiteCross + "<br> <b> Place the first white corner: </b> <br>" + commandPositionWhiteCorner1 + "<br> <b> Solve the first white corner: </b> <br>" + commandSolveWhiteCorner1 + "<br> <b> Place the second white corner: </b> <br>" + commandPositionWhiteCorner2 + "<br> <b> Solve the second white corner: </b> <br>" + commandSolveWhiteCorner2 + "<br> <b> Place the third white corner: </b> <br>" + commandPositionWhiteCorner3 + "<br> <b> Solve the third white corner: </b> <br>" + commandSolveWhiteCorner3 + "<br> <b> Place the fourth white corner: </b> <br>" + commandPositionWhiteCorner4 + "<br> <b> Solve the fourth white corner: </b> <br>" + commandSolveWhiteCorner4 + "<br> <b>All the steps to solve the middle edge places:</b>" + commandSolveMiddleEdges + "<br> <b> Creates the yellow cross: </b>" + commandSolveYellowCross + "<br> <b> Aligns the yellow cross: </b>" + commandAlignYellowCross + "<br> <b> Puts yellow corners in the right place: </b>" + commandAlignYellowCorners + "<br> <b>Puts corners in place: </b>" + commandSolveFinalCorners;

   commandSolveWhiteCross = "";
   commandPositionWhiteCorner1 = "";
   commandSolveWhiteCorner1 = "";
   commandPositionWhiteCorner2 = "";
   commandSolveWhiteCorner2 = "";
   commandPositionWhiteCorner3 = "";
   commandSolveWhiteCorner3 = "";
   commandSolveWhiteCorner3 = "";
   commandPositionWhiteCorner4 = "";
   commandSolveWhiteCorner4 = "";
   commandSolveMiddleEdges = "";
   commandSolveYellowCross = "";
   commandAlignYellowCross = "";
   commandAlignYellowCorners = "";
   commandSolveFinalCorners = "";
   commandSolveAll = "";
   commandSolveAllEnd = "";

   var x = document.getElementById("divAroundSolution");
   x.style.display = "none";


}


////////////////////////
//////////DRAW//////////
////////////////////////
function draw() {







} //draw
