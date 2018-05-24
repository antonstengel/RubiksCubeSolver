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
var up = 4;
var down = 5;
var right = 3;
var left = 1;
var back = 2;
var cube = new Array(6);


////////////////////////
//////////SETUP/////////
////////////////////////
function setup() {
   createCanvas(1000, 1000);
   for (var s = 0; s < 6; s++) { //creates cube, a 6x3x3 array
      cube[s] = new Array(3);
      for (var x = 0; x < 3; x++) {
         cube[s][x] = new Array(3);
      }
   }

   randomize(cube);
   solve(cube);
   visualize(cube);


} //setup








////////////////////////
//////////DRAW//////////
////////////////////////
function draw() {


} //draw
