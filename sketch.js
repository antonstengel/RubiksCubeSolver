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

   randomize(cube);
   //solve(cube);
   visualize(cube);




} //setup




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

function displaySolve() {
   document.getElementById("demo").innerHTML = "(If one of the lines are empty it's because that section is already solved) <br> <b> These rotations  solve the white cross: </b> <br>" + commandSolveWhiteCross + "<br> <b> Place the first white corner: </b> <br>" + commandPositionWhiteCorner1 + "<br> <b> Solve the first white corner: </b> <br>" + commandSolveWhiteCorner1 + "<br> <b> Place the second white corner: </b> <br>" + commandPositionWhiteCorner2 + "<br> <b> Solve the second white corner: </b> <br>" + commandSolveWhiteCorner2 + "<br> <b> Place the third white corner: </b> <br>" + commandPositionWhiteCorner3 + "<br> <b> Solve the third white corner: </b> <br>" + commandSolveWhiteCorner3 + "<br> <b> Place the fourth white corner: </b> <br>" + commandPositionWhiteCorner4 + "<br> <b> Solve the fourth white corner: </b> <br>" + "<br> <b>All the steps to solve the middle edge places:</b> <br>" + commandSolveMiddleEdges + "<br> <b> Creates the yellow cross: </b> <br>" + commandSolveYellowCross + "<br> <b> Aligns the yellow cross: </b> <br>" + commandAlignYellowCross + "<br> <b> Puts yellow corners in the right place: </b> <br>" + commandAlignYellowCorners + "<br> <b> Solves the rest (I'm too lazy to write out instructions): </b> <br>" + finalCommands;
   //document.getElementById("demo").innerHTML = commandSolveWhiteCross;

   // console.log("These rotations solve the white cross:");
   // console.log(commandSolveWhiteCross);
   //
   // console.log("Place the first white corner:");
   // console.log(commandPositionWhiteCorner1);
   // console.log("Solve the first white corner:");
   // console.log(commandSolveWhiteCorner1);
   //
   // console.log("Place the second white corner:");
   // console.log(commandPositionWhiteCorner2);
   // console.log("Solve the second white corner:");
   // console.log(commandSolveWhiteCorner2);
   //
   // console.log("Place the third white corner:");
   // console.log(commandPositionWhiteCorner3);
   // console.log("Solve the third white corner:");
   // console.log(commandSolveWhiteCorner3);
   //
   // console.log("Place the fourth white corner:");
   // console.log(commandPositionWhiteCorner4);
   // console.log("Solve the fourth white corner:");
   // console.log(commandSolveWhiteCorner4);

   // console.log("All the steps to solve the middle edge pieces:");
   // console.log(commandSolveMiddleEdges);
   //
   // console.log("Creates the yellow cross:");
   // console.log(commandSolveYellowCross);
   //
   // console.log("Aligns the yellow cross:");
   // console.log(commandAlignYellowCross);
   //
   // console.log("Puts yellow corners in the right place:");
   // console.log(commandAlignYellowCorners);
   //
   //
   //
   // console.log("Solve the rest:");
   // console.log(finalCommands);

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
   finalCommands = "";
}


////////////////////////
//////////DRAW//////////
////////////////////////
function draw() {







} //draw
