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


////////////////////////////////////
//////////SOLVE WHITE CROSS/////////
///////////////////////////////////

//solves white cross
function solveCross(cube) {

   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if (checkWhiteCross(cube)) {
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

            if (checkWhiteCross(cube)) {
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

               if (checkWhiteCross(cube)) {
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

                  if (checkWhiteCross(cube)) {
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

                     if (checkWhiteCross(cube)) {
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

                        if (checkWhiteCross(cube)) {
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

   console.log("WHITE CROSS COULDNT BE SOLVED");
} //end of solveCross

//outputs commands given numbers
function outputCross(a, b, c, d, e, f, g) {
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

//returns true if white cross is solved and false if it isn't
function checkWhiteCross(cube){
   if ((cube[down][1][0] == 'W') && (cube[down][0][1] == 'W') && (cube[down][1][2] == 'W') && (cube[down][2][1] == 'W') && (cube[front][1][2] == 'B') && (cube[left][1][2] == 'O') && (cube[right][1][1] == 'R')  && (cube[back][1][2] == 'G')) return true;
   else return false;
}


///////////////////////////////////////
//////////SOLVE BOTTOM CORNERS/////////
///////////////////////////////////////

//solves the bottom corners
function solveCorners(cube) {
   //first corner
   if((cube[front][2][2] != 'B') || (cube[right][0][2] != 'R') || (cube[down][2][0] != 'W')){

      positionCorner1(cube);

      if(cube[right][0][0] == 'W') {
         R(cube);
         U(cube);
         Ri(cube);
         console.log("right, up, right inverted (first corner solved)");

      } else if(cube[front][2][0] == 'W') {
         U(cube);
         R(cube);
         Ui(cube);
         Ri(cube);
         console.log("up, right, up inverted, right inverted (first corner solved)")
      } else {
         R(cube);
         U(cube);
         U(cube);
         Ri(cube);
         Ui(cube);
         R(cube);
         U(cube);
         Ri(cube);
         console.log("right, up, up, right inverted, up inverted, right, up, right inverted (first corner solved)")
      }
   }

   //second corner
   if((cube[left][2][2] != 'O') || (cube[front][0][2] != 'B') || (cube[down][0][0] != 'W')){

      positionCorner2(cube);

      if(cube[front][0][0] == 'W') {
         F(cube);
         U(cube);
         Fi(cube);
         console.log("front, up, front inverted (second corner solved)");

      } else if(cube[left][2][0] == 'W') {
         U(cube);
         F(cube);
         Ui(cube);
         Fi(cube);
         console.log("up, front, up inverted, front inverted (second corner solved)")
      } else {
         F(cube);
         U(cube);
         U(cube);
         Fi(cube);
         Ui(cube);
         F(cube);
         U(cube);
         Fi(cube);
         console.log("front, up, up, front inverted, up inverted, front, up front inverted (second corner solved)")
      }
   }

   //third corner
   if((cube[back][2][2] != 'G') || (cube[left][0][2] != 'O') || (cube[down][0][2] != 'W')){

      positionCorner3(cube);

      if(cube[left][0][0] == 'W') {
         L(cube);
         U(cube);
         Li(cube);
         console.log("left, up, left inverted (third corner solved)");

      } else if(cube[back][2][0] == 'W') {
         U(cube);
         L(cube);
         Ui(cube);
         Li(cube);
         console.log("up, left, up inverted, left inverted (third corner solved)")
      } else {
         L(cube);
         U(cube);
         U(cube);
         Li(cube);
         Ui(cube);
         L(cube);
         U(cube);
         Li(cube);
         console.log("left, up, up, left inverted, up inverted, left, up front inverted (third corner solved)")
      }
   }

   //fourth corner
   if((cube[right][2][2] != 'R') || (cube[back][0][2] != 'G') || (cube[down][2][2] != 'W')){

      positionCorner4(cube);

      if(cube[back][0][0] == 'W') {
         B(cube);
         U(cube);
         Bi(cube);
         console.log("back, up, back inverted (fourth corner solved)");

      } else if(cube[right][2][0] == 'W') {
         U(cube);
         B(cube);
         Ui(cube);
         Bi(cube);
         console.log("up, back, up inverted, back inverted (fourth corner solved)")
      } else {
         B(cube);
         U(cube);
         U(cube);
         Bi(cube);
         Ui(cube);
         B(cube);
         U(cube);
         Bi(cube);
         console.log("back, up, up, back inverted, up inverted, back, up front inverted (fourth corner solved)")
      }
   }
} //end of solveCorners

//checks if corner1 is ready to be placed in
function checkCorner1(cube) {
   if( ((cube[up][2][2] == 'B') && (cube[front][2][0] == 'W') && (cube[right][0][0] == 'R')) || ((cube[up][2][2] == 'W') && (cube[front][2][0] == 'R') && (cube[right][0][0] == 'B')) || ((cube[up][2][2] == 'R') && (cube[front][2][0] == 'B') && (cube[right][0][0] == 'W')) ) return true;
   else return false;
}

//puts corner1 in position to be placed in
function positionCorner1(cube) {
   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if (checkWhiteCross(cube) && checkCorner1(cube)) {
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

            if (checkWhiteCross(cube) && checkCorner1(cube)) {
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

               if (checkWhiteCross(cube) && checkCorner1(cube)) {
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
}


//checks if corner2 is ready to be placed in
function checkCorner2(cube) {
   if( ((cube[up][0][2] == 'O') && (cube[left][2][0] == 'W') && (cube[front][0][0] == 'B')) || ((cube[up][0][2] == 'W') && (cube[left][2][0] == 'B') && (cube[front][0][0] == 'O')) || ((cube[up][0][2] == 'B') && (cube[left][2][0] == 'O') && (cube[front][0][0] == 'W')) ) return true;
   else return false;
}

//puts corner2 in position to be placed in
function positionCorner2(cube) {
   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if (checkWhiteCross(cube) && checkCorner2(cube) && (cube[down][2][0] == 'W')) {
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

            if (checkWhiteCross(cube) && checkCorner2(cube) && (cube[down][2][0] == 'W')) {
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

               if (checkWhiteCross(cube) && checkCorner2(cube) && (cube[down][2][0] == 'W')) {
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
}


//checks if corner3 is ready to be placed in
function checkCorner3(cube) {
   if( ((cube[up][0][0] == 'G') && (cube[back][2][0] == 'W') && (cube[left][0][0] == 'O')) || ((cube[up][0][0] == 'W') && (cube[back][2][0] == 'O') && (cube[left][0][0] == 'G')) || ((cube[up][0][0] == 'O') && (cube[back][2][0] == 'G') && (cube[left][0][0] == 'W')) ) return true;
   else return false;
}

//puts corner3 in position to be placed in
function positionCorner3(cube) {
   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if (checkWhiteCross(cube) && checkCorner3(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W')) {
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

            if (checkWhiteCross(cube) && checkCorner3(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W')) {
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

               if (checkWhiteCross(cube) && checkCorner3(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W')) {
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
}


//checks if corner4 is ready to be placed in
function checkCorner4(cube) {
   if( ((cube[up][2][0] == 'R') && (cube[right][2][0] == 'W') && (cube[back][0][0] == 'G')) || ((cube[up][2][0] == 'W') && (cube[right][2][0] == 'G') && (cube[back][0][0] == 'R')) || ((cube[up][2][0] == 'G') && (cube[right][2][0] == 'R') && (cube[back][0][0] == 'W')) ) return true;
   else return false;
}

//puts corner4 in position to be placed in
function positionCorner4(cube) {
   //a through b
   for (var a = -1; a < 12; a++) {
      singleRotation(a);

      for(var b = -1; b < 12; b++) {
         singleRotation(b);

         if (checkWhiteCross(cube) && checkCorner4(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W') && (cube[down][0][2] == 'W')) {
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

            if (checkWhiteCross(cube) && checkCorner4(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W') && (cube[down][0][2] == 'W')) {
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

               if (checkWhiteCross(cube) && checkCorner4(cube) && (cube[down][2][0] == 'W') && (cube[down][0][0] == 'W') && (cube[down][0][2] == 'W')) {
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
}

/////////////////////////////////////
//////////SOLVE MIDDLE EDGES/////////
////////////////////////////////////

//checks if bottom side is completed
function checkBottomSide() {
   if(checkWhiteCross(cube) && (cube[bottom][0][0] == 'W') && (cube[bottom][2][0] == 'W') && (cube[bottom][0][2] == 'W') && (cube[bottom][2][2] == 'W') && (cube[front][0][2] == 'B') && (cube[front][2][2] == 'B') && (cube[back][0][2] == 'G') && (cube[back][2][2] == 'G')) return true;
   else return false;
}

//solves middle edges that can be solved without moving cube
function solveAvailableMiddles(cube) {
   if ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'R')) solveBlueRed(cube);
   if ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'O')) solveBlueOrange(cube);
   if ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'B')) solveOrangeBlue(cube);
   if ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'G')) solveOrangeGreen(cube);
   if ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'O')) solveGreenOrange(cube);
   if ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'R')) solveGreenRed(cube);
   if ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'G')) solveRedGreen(cube);
   if ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'B')) solveRedBlue(cube);
}

//solves middle edges while checking a move up and up inverted
function solveMiddlesWithMoves(cube){
   for(var z = 0; z < 5; z++){ //low key no idea why but if I run it five times it always works
      solveAvailableMiddles(cube);

      for (var a = 0; a < 2; a++) {
         if (a == 0) U(cube);
         else Ui(cube);

         if ( ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'R')) || ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'O')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'B')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'G')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'O')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'R')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'G')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'B')) ) {
            if (a == 0) console.log("up");
            else console.log("up inverted");
            solveAvailableMiddles(cube);
         } else {
            if (a == 0) Ui(cube);
            else U(cube);
         }
      }

      solveAvailableMiddles(cube);

      for (var a = 0; a < 2; a++) {
         if (a == 0) U(cube);
         else Ui(cube);

         if ( ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'R')) || ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'O')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'B')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'G')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'O')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'R')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'G')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'B')) ) {
            if (a == 0) console.log("up");
            else console.log("up inverted");
            solveAvailableMiddles(cube);
         } else {
            if (a == 0) Ui(cube);
            else U(cube);
         }
      }

      solveAvailableMiddles(cube);


      U(cube); U(cube);

      if ( ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'R')) || ((cube[front][1][0] == 'B') && (cube[up][1][2] == 'O')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'B')) || ((cube[left][1][0] == 'O') && (cube[up][0][1] == 'G')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'O')) || ((cube[back][1][0] == 'G') && (cube[up][1][0] == 'R')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'G')) || ((cube[right][1][0] == 'R') && (cube[up][2][1] == 'B')) ) {
         console.log("up, up");
         solveAvailableMiddles(cube);
      } else {
         U(cube); U(cube);
      }
   }//runs twice
} //solveMiddlesWithMoves

//solves middle edges that are placed in badly already
function solveMessedUpMiddles(cube) {
   if((cube[front][0][1] == 'O') && (cube[left][2][1] == 'B')){
      solveBlueOrange(cube);
      solveMiddlesWithMoves(cube);
   }
   if((cube[left][0][1] == 'G') && (cube[back][2][1] == 'O')){
      solveOrangeGreen(cube);
      solveMiddlesWithMoves(cube);
   }
   if((cube[back][0][1] == 'R') && (cube[right][2][1] == 'G')){
      solveGreenRed(cube);
      solveMiddlesWithMoves(cube);
   }
   if((cube[right][0][1] == 'B') && (cube[front][2][1] == 'R')){
      solveRedBlue(cube);
      solveMiddlesWithMoves(cube);
   }
}

function solveBlueRed(cube) {
   U(cube); R(cube); Ui(cube); Ri(cube); Ui(cube); Fi(cube); U(cube); F(cube);
   console.log("up, right, up inverted, right inverted, up inverted, front inverted, up, front (blue-red edge solved)");
}

function solveBlueOrange(cube) {
   Ui(cube); Li(cube); U(cube); L(cube); U(cube); F(cube); Ui(cube); Fi(cube);
   console.log("up inverted, left inverted, up, left, up, front, up inverted, front inverted (blue-orange edge solved)");
}

function solveOrangeBlue(cube) {
   U(cube); F(cube); Ui(cube); Fi(cube); Ui(cube); Li(cube); U(cube); L(cube);
   console.log("up, front, up inverted, front inverted, up inverted, left inverted, up, left (blue-red edge solved)");
}

function solveOrangeGreen(cube) {
   Ui(cube); Bi(cube); U(cube); B(cube); U(cube); L(cube); Ui(cube); Li(cube);
   console.log("up inverted, back inverted, up, back, up, left, up inverted, left inverted (orange-green edge solved)");
}

function solveGreenOrange(cube) {
   U(cube); L(cube); Ui(cube); Li(cube); Ui(cube); Bi(cube); U(cube); B(cube);
   console.log("up, left, up inverted, left inverted, up inverted, back inverted, up, back (green-orange edge solved)");

}

function solveGreenRed(cube) {
   Ui(cube); Ri(cube); U(cube); R(cube); U(cube); B(cube); Ui(cube); Bi(cube);
   console.log("up inverted, right inverted, up, right, up, back, up inverted, back inverted (green-red edge solved)");

}

function solveRedGreen(cube) {
   U(cube); B(cube); Ui(cube); Bi(cube); Ui(cube); Ri(cube); U(cube); R(cube);
   console.log("up, front, up inverted, front inverted, up inverted, left inverted, up, left (red-green edge solved)");
}

function solveRedBlue(cube) {
   Ui(cube); Fi(cube); U(cube); F(cube); U(cube); R(cube); Ui(cube); Ri(cube);
   console.log("up inverted, back inverted, up, back, up, left, up inverted, left inverted (red-blue edge solved)");
}

//solves middle edges
function solveMiddle(cube) {
   solveMiddlesWithMoves(cube);
   solveMessedUpMiddles(cube);




} //solveMiddle


////////////////////////
//////////OTHER/////////
////////////////////////

//solves the cube!
function solve(cube){
   solveCross(cube);
   solveCorners(cube);
   solveMiddle(cube);
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

   corner1 = [cube[up][0][2], cube[left][2][0], cube[front][0][0]];
   corner2 = [cube[up][0][0], cube[back][2][0], cube[left][0][0]];
   corner3 = [cube[up][2][0], cube[right][2][0], cube[back][0][0]];
   corner4 = [cube[up][2][2], cube[front][2][0], cube[right][0][0]];
   corner5 = [cube[down][0][0], cube[left][2][2], cube[front][0][2]];
   corner6 = [cube[up][0][0], cube[back][2][0], cube[left][0][0]];
   corner7 = [cube[up][2][0], cube[right][2][0], cube[back][0][0]];
   corner8 = [cube[up][2][2], cube[front][2][0], cube[right][0][0]];

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

//visuales cube layout on screen
function visualize(cube) {
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
} //end of visualize

//single rotation of cube given number -1-11, 11-givenNumber is the reverse move
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
