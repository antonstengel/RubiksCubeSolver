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

   solvedState(cube);
   randomize(cube);

} //setup


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
            rect(smallX + bigX + 50, smallY + bigY + 50, 50, 50, 8);
         } //y
      } //x
   } //s
} //draw



//checkerboard pattern!
function checkerboard(cube) {
   solvedState(cube);
   R(cube);
   R(cube);
   L(cube);
   L(cube);
   U(cube);
   U(cube);
   D(cube);
   D(cube);
   F(cube);
   F(cube);
   B(cube);
   B(cube);
}

//changed-center pattern!
function changeMiddles(cube) {
   solvedState(cube);
   R(cube);
   Li(cube);
   F(cube);
   Bi(cube);
   U(cube);
   Di(cube);
   R(cube);
   Li(cube);
}

//checkerboard and changed-center pattern!
function checkerAndMiddles(cube) {
   solvedState(cube);
   R(cube);
   R(cube);
   L(cube);
   L(cube);
   U(cube);
   U(cube);
   D(cube);
   D(cube);
   F(cube);
   F(cube);
   B(cube);
   B(cube);
   R(cube);
   Li(cube);
   F(cube);
   Bi(cube);
   U(cube);
   Di(cube);
   R(cube);
   Li(cube);
}


//sets the cube to a solved state
function solvedState(cube) {
   for (var s = 0; s < 6; s++){
      for (var x = 0; x < 3; x++){
         for (var y = 0; y < 3; y++){
            switch(s){
               case front:
                  cube[s][x][y] = 'B';
                  break;
               case up:
                  cube[s][x][y] = 'Y';
                  break;
               case down:
                  cube[s][x][y] = 'W';
                  break;
               case right:
                  cube[s][x][y] = 'R';
                  break;
               case left:
                  cube[s][x][y] = 'O';
                  break;
               case back:
                  cube[s][x][y] = 'G';
                  break;
            } //switch
         } //s
      } //x
   } //y
} //solvedState


//sets the cube to a randomized state
/*
   x's and y's of (0,0), (2,0), (2,2), and (0,2) are corner pieces.
   x's and y's of (1,0), (2,1), (1,1), and (0,1) are edge pieces.
   x's and y's of (1,1) are center pieces.
   Easy way to tell what kind of piece it is:
      if x + y is even and not (1,1), piece is a corner.
      if x + y is odd, piece is edge.
*/
function randomize(cube) {
   for (var i=0; i < 20; i++) {
      var randomNumber = Math.floor(Math.random() * 6); //random number 0-5
      if (randomNumber == 0) R(cube);
      else if (randomNumber == 1) L(cube);
      else if (randomNumber == 2) D(cube);
      else if (randomNumber == 3) U(cube);
      else if (randomNumber == 4) F(cube);
      else if (randomNumber == 5) B(cube);
   }
} //randomize


////////////////////////////////////
//////////LIBRARY OF TURNS//////////
////////////////////////////////////
//clockwise rotation of a face
function faceClock(cube, face){
   //corners
   var temp = cube[face][0][0];
   cube[face][0][0] = cube[face][0][2];
   cube[face][0][2] = cube[face][2][2];
   cube[face][2][2] = cube[face][2][0];
   cube[face][2][0] = temp;


   //edges
   var temp = cube[face][1][0];
   cube[face][1][0] = cube[face][0][1];
   cube[face][0][1] = cube[face][1][2];
   cube[face][1][2] = cube[face][2][1];
   cube[face][2][1] = temp;
}

//counterclockwise rotation of a face
function faceCounter(cube, face){
   //corners
   var temp = cube[face][0][0];
   cube[face][0][0] = cube[face][2][0];
   cube[face][2][0] = cube[face][2][2];
   cube[face][2][2] = cube[face][0][2];
   cube[face][0][2] = temp;

   //edges
   var temp = cube[face][1][0];
   cube[face][1][0] = cube[face][2][1];
   cube[face][2][1] = cube[face][1][2]
   cube[face][1][2] = cube[face][0][1]
   cube[face][0][1] = temp;
}


//clockwise rotation of front face
function F(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[up][x][2];
         cube[up][x][2] = cube[left][2][2-x];
         cube[left][2][2-x] = cube[down][2-x][0];
         cube[down][2-x][0] = cube[right][0][x];
         cube[right][0][x] = temp[x];
   }

   faceClock(cube, front);
} //frontClock

//counterclockwise rotation of front face
function Fi(cube) {
   var temp = new Array(3);
   var x; //counter

    //move the edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[right][0][x];
      cube[right][0][x] = cube[down][2-x][0];
      cube[down][2-x][0] = cube[left][2][2-x];
      cube[left][2][2-x] = cube[up][x][2];
      cube[up][x][2] = temp[x];
   }

   faceCounter(cube, front);
} //frontClock


//clockwise rotation of back face
function B(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[up][x][0];
      cube[up][x][0] = cube[right][2][x];
      cube[right][2][x] = cube[down][x][2];
      cube[down][x][2] = cube[left][0][x];
      cube[left][0][x] = temp[x];
   }

   faceClock(cube, back);
} //frontClock

//clockwise rotation of back face
function Bi(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[up][x][0];
      cube[up][x][0] = cube[left][0][2-x];
      cube[left][0][2-x] = cube[down][2-x][2];
      cube[down][2-x][2] = cube[right][2][x];
      cube[right][2][x] = temp[x];
   }

   faceCounter(cube, back);
} //frontClock


//clockwise rotation of up face
function U(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][x][0];
         cube[front][x][0] = cube[right][x][0];
         cube[right][x][0] = cube[back][x][0];
         cube[back][x][0] = cube[left][x][0];
         cube[left][x][0] = temp[x];
   }

   faceClock(cube, up);
}

//counterclockwise rotation of up face
function Ui(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][x][0];
      cube[front][x][0] = cube[left][x][0];
      cube[left][x][0] = cube[back][x][0];
      cube[back][x][0] = cube[right][x][0];
      cube[right][x][0] = temp[x];
   }

   faceCounter(cube, up);
}


//clockwise rotation of down face
function D(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][x][2];
      cube[front][x][2] = cube[left][x][2];
      cube[left][x][2] = cube[back][x][2];
      cube[back][x][2] = cube[right][x][2];
      cube[right][x][2] = temp[x];
   }

   faceClock(cube, down);
}

//counterclockwise rotation of down face
function Di(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][x][2];
      cube[front][x][2] = cube[right][x][2];
      cube[right][x][2] = cube[back][x][2];
      cube[back][x][2] = cube[left][x][2];
      cube[left][x][2] = temp[x];
   }

   faceCounter(cube, down);
}


//clockwise rotation of right face
function R(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][2][x];
      cube[front][2][x] = cube[down][2][x];
      cube[down][2][x] = cube[back][0][2-x];
      cube[back][0][2-x] = cube[up][2][x];
      cube[up][2][x] = temp[x];
   }

   faceClock(cube, right);
}

//counterclockwise rotation of right face
function Ri(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][2][x];
      cube[front][2][x] = cube[up][2][x];
      cube[up][2][x] = cube[back][0][2-x];
      cube[back][0][2-x] = cube[down][2][x];
      cube[down][2][x] = temp[x];
   }

   faceCounter(cube, right);
}


//clockwise rotation of left face
function L(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][0][x];
      cube[front][0][x] = cube[up][0][x];
      cube[up][0][x] = cube[back][2][2-x];
      cube[back][2][2-x] = cube[down][0][x];
      cube[down][0][x] = temp[x];
   }

   faceClock(cube, left);
}

//counterclockwise rotation of left face
function Li(cube) {
   var temp = new Array(3);
   var x; //counter

   //move the outer edges affected by the rotation
   for (x = 0; x < 3; x++) {
      temp[x] = cube[front][0][x];
      cube[front][0][x] = cube[down][0][x];
      cube[down][0][x] = cube[back][2][2-x];
      cube[back][2][2-x] = cube[up][0][x];
      cube[up][0][x] = temp[x];
   }

   faceCounter(cube, left);
}
