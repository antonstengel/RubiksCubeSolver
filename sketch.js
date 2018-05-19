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

STUFF FOR TREE:


function Node(data) {
    this.data = data;
    this.parent = null;
    this.child = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var tree = new Tree(cube);

var cube1 = new R(cube);
Ri(cube);
tree._root.child[0] = cube1;

console.log(tree._root);
*/

//defines numbers as 6 sides of the cube
var front = 0; //test for henry
var up = 1;
var down = 2;
var right = 3;
var left = 4;
var back = 5;
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

   solveCross(cube);

   solveCorners(cube);



} //setup



function solveCorners(cube) {
   var count = 0;


   if (cube[up][0][0] == 'W')
   if (cube[up][2][0] == 'W')
   if (cube[up][0][2] == 'W')
   if (cube[up][2][2] == 'W')


   console.log(count);
}












////////////////////////
//////////DRAW//////////
////////////////////////
function draw() {
   //visuales cube layout on screen
   for (var s = 0; s < 6; s++) {
      for (var x = 0; x < 3; x++) {
         for(var y = 0; y < 3; y++) {
            //print(cube[s][y][z]); //prints location of cube

            var bigX = 0; //x-location of sides
            var smallX = 0; //x-location of individual piece
            var bigY = 0; //y-location of sides
            var smallY = 0; //y-location of individual piece

            if(s == front){
               bigX = 150;
               bigY = 150;
            }
            else if(s == up){
               bigX = 150;
               bigY = 0;
            }
            else if(s == down){
               bigX = 150;
               bigY = 300;
            }
            else if(s == right){
               bigX = 300;
               bigY = 150;
            }
            else if(s == left){
               bigX = 0;
               bigY = 150;
            }
            else{
               bigX = 450;
               bigY = 150;
            }

            if (x == 0) smallX = 0;
            else if (x == 1) smallX = 50;
            else smallX = 100;

            if (y == 0) smallY = 0;
            else if (y == 1) smallY = 50;
            else smallY = 100;

            strokeWeight(6);
            if (cube[s][x][y] == 'B') fill(0,0,255);
            else if (cube[s][x][y] == 'Y') fill(255,255,0);
            else if (cube[s][x][y] == 'W') fill(255,255,255);
            else if (cube[s][x][y] == 'R') fill(255,0,0);
            else if (cube[s][x][y] == 'O') fill(255,150,0);
            else if (cube[s][x][y] == 'G') fill(0,250,0);
            rect(smallX + bigX, smallY + bigY, 50, 50, 8);
         } //y
      } //x
   } //s
} //draw
