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
var up = 1;
var down = 2;
var right = 3;
var left = 4;
var black = 5;
var cube = new Array(6);



//solves white cross
function solveCross(cube){

   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
            console.log(a + " " + b);
            console.log(outputCross(a, b, -1, -1, -1, -1, -1));
            return;
         }

         singleRotation(11-b);
      } //b
      singleRotation(11-a);
   } //a

   console.log("b");

   //a through c
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         for(var c = -1; c < 12; c++) {
            singleRotation(c);

            if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
               console.log(a + " " + b + " " + c);
               console.log(outputCross(a, b, c, -1, -1, -1, -1));
               return;
            }

            singleRotation(11-c);
         } //c
         singleRotation(11-b);
      } //b
      singleRotation(11-a);
   } //a

   console.log("c");

   //a through d
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         for(var c = -1; c < 12; c++) {
            singleRotation(c);

            for(var d = -1; d < 12; d++) {
               singleRotation(d);

               if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
                  console.log(a + " " + b + " " + c + " " + d);
                  console.log(outputCross(a, b, c, d, -1, -1, -1));
                  return;
               }

               singleRotation(11-d);
            } //d
            singleRotation(11-c);
         } //c
         singleRotation(11-b);
      } //b
      singleRotation(11-a);
   } //a

   console.log("d");

   //a through e
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         for(var c = -1; c < 12; c++) {
            singleRotation(c);

            for(var d = -1; d < 12; d++) {
               singleRotation(d);

               for(var e = -1; d < 12; d++) {
                  singleRotation(e);

                  if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
                     console.log(a + " " + b + " " + c + " " + d + " " + e);
                     console.log(outputCross(a, b, c, d, e, -1, -1));
                     return;
                  }

                  singleRotation(11-e);
               } //e
               singleRotation(11-d);
            } //d
            singleRotation(11-c);
         } //c
         singleRotation(11-b);
      } //b
      singleRotation(11-a);
   } //a

   console.log("e");

   //a through f
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         for(var c = -1; c < 12; c++) {
            singleRotation(c);

            for(var d = -1; d < 12; d++) {
               singleRotation(d);

               for(var e = -1; d < 12; d++) {
                  singleRotation(e);

                  for(var f = -1; f < 12; f++){
                     singleRotation(f);

                     if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
                        console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f);
                        console.log(outputCross(a, b, c, d, e, f, -1));
                        return;
                     }

                     singleRotation(11-f);
                  } //f
                  singleRotation(11-e);
               } //e
               singleRotation(11-d);
            } //d
            singleRotation(11-c);
         } //c
         singleRotation(11-b);
      } //b
      singleRotation(11-a);
   } //a

   console.log("f");

   //a through g
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         for(var c = -1; c < 12; c++) {
            singleRotation(c);

            for(var d = -1; d < 12; d++) {
               singleRotation(d);

               for(var e = -1; e < 12; e++) {
                  singleRotation(e);

                  for(var f = -1; f < 12; f++) {
                     singleRotation(f);

                     for(var g = 0; g < 12; g++) {
                        singleRotation(g);

                        if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) {
                           console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g);
                           console.log(outputCross(a, b, c, d, e, f, g));
                           return;
                        }

                        singleRotation(11-g);
                     }
                     singleRotation(11-f);
                  }
                  singleRotation(11-e);
               }
               singleRotation(11-d);
            }
            singleRotation(11-c);
         }
         singleRotation(11-b);
      }
      singleRotation(11-a);
   }
} //end of solveCross

//outputs blue cross values
function outputCross(a, b, c, d, e, f, g){
   var input = [a, b, c, d, e, f, g];
   //var output = new Array(7);
   var output = ["right", "left", "left", "left", "left", "left", "left"];

   for(var i = 0; i < 7; i++) {
      if(input[i] == -1) output[i] = "";
      else if(input[i] == 0) output[i] = "right, ";
      else if(input[i] == 1) output[i] = "left, ";
      else if(input[i] == 2) output[i] = "up, ";
      else if(input[i] == 3) output[i] = "down, ";
      else if(input[i] == 4) output[i] = "front, ";
      else if(input[i] == 5) output[i] = "back, ";
      else if(input[i] == 6) output[i] = "back inverted, ";
      else if(input[i] == 7) output[i] = "front inverted, ";
      else if(input[i] == 8) output[i] = "down inverted, ";
      else if(input[i] == 9) output[i] = "up inverted, ";
      else if(input[i] == 10) output[i] = "left inverted, ";
      else if(input[i] == 11) output[i] = "right inverted, ";
   }

   var response = output[0] + output[1] + output[2] + output[3] + " " + output[4] + output[5] + output[6];

   console.log(response);
}








//single rotation of cube given number 0-11, 11-givenNumber is the reverse move
function singleRotation(number){
   if (number == 0) R(cube);
   else if (number == 1) L(cube);
   else if (number == 2) U(cube);
   else if (number == 3) D(cube);
   else if (number == 4) F(cube);
   else if (number == 5) B(cube);
   else if (number == 6) Bi(cube);
   else if (number == 7) Fi(cube);
   else if (number == 8) Di(cube);
   else if (number == 9) Ui(cube);
   else if (number == 10) Li(cube);
   else if (number == 11) Ri(cube);
}


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
function randomize(cube) {
   solvedState(cube);
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
