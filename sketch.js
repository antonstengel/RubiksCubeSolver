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
var solvedCube = new Array(6);
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
   for (var s = 0; s < 6; s++) { //creates solvedCube, a 6x3x3 array
      solvedCube[s] = new Array(3);
      for (var x = 0; x < 3; x++) {
         solvedCube[s][x] = new Array(3);
      }
   }
   solvedState(solvedCube); //sets solvedCube to solvedState
   randomize(cube);
   //solves something muddled with 6 rotations (really inefficient—hits a wall at 7)


/*
      loop1:
         for (var a = 0; a < 12; a++) {
            singleRotation(a);

            if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
               console.log(a);
               //break loop1;
            }

            for(var b = 0; b < 12; b++) {
               singleRotation(b);

               if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
                  console.log(a + " " + b);
                  //break loop1;
               }

               for(var c = 0; c < 12; c++) {
                  singleRotation(c);

                  if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
                     console.log(a + " " + b + " " + c);
                     //break loop1;
                  }

                  for(var d = 0; d < 12; d++) {
                     singleRotation(d);

                     if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
                        console.log(a + " " + b + " " + c + " " + d);
                        //break loop1;
                     }

                     for(var e = 0; e < 12; e++) {
                        singleRotation(e);

                        if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
                           console.log(a + " " + b + " " + c + " " + d + " " + e);
                           //break loop1;
                        }

                        for(var f = 0; f < 12; f++) {
                           singleRotation(f);

                                          if (JSON.stringify(cube) == JSON.stringify(solvedCube)) {
                                             console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f);
                                             //break loop1;
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
*/


      loop2:
         for (var a = 0; a < 12; a++) {
            singleRotation(a);

            if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])){
               console.log(a);
               break loop2;
            }

            }

            for(var b = 0; b < 12; b++) {
               singleRotation(b);

               if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                  console.log(a + " " + b);
                  break loop2;
               }

               for(var c = 0; c < 12; c++) {
                  singleRotation(c);

                  if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                     console.log(a + " " + b + " " + c);
                     break loop2;
                  }

                  for(var d = 0; d < 12; d++) {
                     singleRotation(d);

                     if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                        console.log(a + " " + b + " " + c + " " + d);
                        break loop2;
                     }

                     for(var e = 0; e < 12; e++) {
                        singleRotation(e);

                        if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                           console.log(a + " " + b + " " + c + " " + d + " " + e);
                           break loop2;
                        }

                        for(var f = 0; f < 12; f++) {
                           singleRotation(f);

                                          if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                                             console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f);
                                             break loop2;
                                          }

                           for(var g = 0; g < 12; g++) {
                              singleRotation(g);

                                             if ((cube[front][1][1] == cube[front][1][0]) && (cube[front][1][1] == cube[front][0][1]) && (cube[front][1][1] == cube[front][2][1]) && (cube[front][1][1] == cube[front][1][2])) {
                                                console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g);
                                                break loop2;
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



   var newCube = cube.slice(0);
   R(newCube);
   //console.log(JSON.stringify(newCube) == JSON.stringify(cube));



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
            rect(smallX + bigX, smallY + bigY, 50, 50, 8);
         } //y
      } //x
   } //s
} //draw









/////////////////////////////////
//////////LIBRARY STUFF//////////
/////////////////////////////////
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
