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
*/

//defines numbers as 6 sides of the cube
var front = 0;
var up = 4;
var down = 5;
var right = 3;
var left = 1;
var back = 2;
var cube = new Array(6);


//////////////////////////
//////////FOR FUN/////////
//////////////////////////

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


////////////////////////////
//////////ROTATIONS/////////
////////////////////////////

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
      cube[right][2][x] = cube[down][2-x][2];
      cube[down][2-x][2] = cube[left][0][2-x];
      cube[left][0][2-x] = temp[x];
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
