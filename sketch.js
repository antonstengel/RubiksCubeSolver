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

//count for next and previous buttons
var countForNext = -1;

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


   var facelet;
   var faceletX;
   var faceletY;
   var cubeS;
   var cubeX;
   var cubeY;
   var selected;
   var faceletStr;
   var fillVal;

} //setup




function keyPressed() {
   if (keyCode === RIGHT_ARROW)
      nextButton();
   else if (keyCode === LEFT_ARROW)
      previousButton();


    else if (key === 'r' || key === 'R'){ //RED
        for(var s = 0; s < 6; s++){
           for(var x = 0; x < 3; x++){
              for(var y = 0; y < 3; y++){
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'R';
                 }
              }
           }
        }
     }

     else if(key === 'g' || key === 'G'){ //GREEN
        for(var s = 0; s < 6; s++) {
           for(var x = 0; x < 3; x++) {
              for(var y = 0; y < 3; y++) {
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'G';
                 }
              }
           }
        }
     }
     else if(key === 'b' || key === 'B'){//BLUE
        for(var s = 0; s < 6; s++) {
           for(var x = 0; x < 3; x++) {
              for(var y = 0; y < 3; y++) {
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'B';
                 }
              }
           }
        }
     }
     else if(key === 'o' || key === 'O'){//ORANGE
        for(var s = 0; s < 6; s++) {
           for(var x = 0; x < 3; x++) {
              for(var y = 0; y < 3; y++) {
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'O';
                 }
              }
           }
        }
     }
     else if(key === 'w' || key === 'W'){//WHITE
        for(var s = 0; s < 6; s++) {
           for(var x = 0; x < 3; x++) {
              for(var y = 0; y < 3; y++) {
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'W';
                 }
              }
           }
        }
     }
     else if(key === 'y' || key === 'Y'){//YELLOW
        for(var s = 0; s < 6; s++) {
           for(var x = 0; x < 3; x++) {
              for(var y = 0; y < 3; y++) {
                 if(cube[s][x][y]=='selected'){
                    cube[s][x][y]= 'Y';
                 }
              }
           }
        }
     }

     visualize(cube);
}






//takes in ex: "front" and performs F(cube)
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

//takes in ex: "front" and performs Fi(cube)
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


//function for next button
function nextButton() {
   if (countForNext < allCommandsArray.length - 1){
      countForNext++;
      move(allCommandsArray[countForNext]);
      console.log(countForNext);
      visualize(cube);

      document.getElementById("singleStepSolveText").innerHTML = "move " + (countForNext + 2) + "/" + allCommandsArray.length + ": <b>" + allCommandsArray[countForNext + 1] + "</b>";

      if (countForNext == (allCommandsArray.length - 1)) {
         document.getElementById("singleStepSolveText").innerHTML = "Congrats, the cube has been solved!";
      }
   }
}

//function for previous button
function previousButton() {
   if (countForNext > -1) {

      reverseMove(allCommandsArray[countForNext]);
      console.log(countForNext);
      countForNext --;
      visualize(cube);

      document.getElementById("singleStepSolveText").innerHTML = "move " + (countForNext + 2) + "/" + allCommandsArray.length + ": <b>" + allCommandsArray[countForNext + 1] + "</b>";

   }

}

//function for input button
function inputButton() {
   countForNext = -1;

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

//function for solve button
function solveButton() {
   countForNext = -1;

   solve(cube);
   visualize(cube);

   var x = document.getElementById("oneStepSolutionContainer");
   x.style.display = "block";

   document.getElementById("singleStepSolveText").innerHTML = "move 1/" + allCommandsArray.length + ": <b>" + allCommandsArray[countForNext + 1] + "</b>";
}

//function for randomize button
function randomizeButton() {
   countForNext = -1;
   randomize(cube);
   visualize(cube);
}

//function for instructions button
function instructionsButton() {
   var x = document.getElementById("instructionsDiv");


   if (x.style.display == "inline-block") {
      x.style.display = "none";
   } else {
      x.style.display = "inline-block";
   }
}

//function for toggle button to show steps
function toggleSolutionButton() {
   var x = document.getElementById("divAroundSolution");

   if(x.style.display == "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}


//called by solve(cube), fills website with text showing how to solve
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





function mousePressed() {
   console.log(mouseX+", "+mouseY);
   if(mouseY >= 0){
         for(var s=0; s<6; s++){

            if(s==0){//FRONT
               var yVal = 120;
               var sVal = 120;
            }
            else if(s==1){//LEFT
               var yVal = 120;
               var sVal = 0;
            }
            else if(s==2){//BACK
               var yVal = 120;
               var sVal = 360;
            }
            else if(s==3){//RIGHT
               var yVal = 120;
               var sVal = 240;
            }
            else if(s==4){//UP
               var yVal = 0;
               var sVal = 120;
            }
            else if(s==5){//DOWN
               var yVal = 240;
               var sVal = 120;
            }

            if (mouseX>sVal && mouseX<sVal+40 && mouseY>yVal && mouseY<yVal+40){//row1 column1
               facelet = s*100;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal;
               faceletY = yVal;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            else if (mouseX>sVal+40 && mouseX<sVal+80 && mouseY>yVal && mouseY<yVal+40){//row1 column2
               facelet = s*100+10;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+40;
               faceletY = yVal;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            else if (mouseX>sVal+80 && mouseX<sVal+120 && mouseY>yVal && mouseY<yVal+40){//row1 column3
               facelet = s*100+20;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+80;
               faceletY = yVal;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            //THIS ONE
            else if (mouseX>sVal && mouseX<sVal+40 && mouseY>yVal+40 && mouseY<yVal+80){//row2 column1
               facelet = s*100+1;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal;
               faceletY = yVal+40;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            //THIS ONE
            else if (mouseX>sVal && mouseX<sVal+40 && mouseY>yVal+80 && mouseY<yVal+120){//row3 column1
               facelet = s*100+2;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal;
               faceletY = yVal+80;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            else if (mouseX>sVal+40 && mouseX<sVal+80 && mouseY>yVal+40 && mouseY<yVal+80){//row2 column2
               facelet = s*100+11;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+40;
               faceletY = yVal+40;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            //THIS ONE
            else if (mouseX>sVal+80 && mouseX<sVal+120 && mouseY>yVal+40 && mouseY<yVal+80){//row2 column3
               facelet = s*100+21;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+80;
               faceletY = yVal+40;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            //THIS ONE
            else if (mouseX>sVal+40 && mouseX<sVal+80 && mouseY>yVal+80 && mouseY<yVal+120){//row3 column2
               facelet = s*100+12;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+40;
               faceletY = yVal+80;
               faceletStr = facelet+"";
               console.log("TEST");
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            else if (mouseX>sVal+80 && mouseX<sVal+120 && mouseY>yVal+80 && mouseY<yVal+120){//row3 column3
               facelet = s*100+22;
               facelet+=1000;
               fillVal = get(mouseX, mouseY);
               faceletX = sVal+80;
               faceletY = yVal+80;
               faceletStr = facelet+"";
               cube[faceletStr.charAt(1)][faceletStr.charAt(2)][faceletStr.charAt(3)] = 'selected';
            }
            //else console.log("Please click inside the cube.");
      }
      //fill(fillVal);
      noFill();
      strokeWeight(6);
      stroke(150,150,0);
      //stroke(0);
      rect(faceletX, faceletY, 40, 40, 8);
      stroke(0,0,0);
      console.log(facelet);
   }
} //mousePressed















////////////////////////
//////////DRAW//////////
////////////////////////
function draw() {

   if (keyIsDown(UP_ARROW)) {
      if (keyIsDown(LEFT_ARROW)) {
         previousButton();
      }

      if (keyIsDown(RIGHT_ARROW)) {
         nextButton();
      }
   }

} //draw
