/* Hints : 
Ogres mined the field to protect their Chieftain.
But we can use the "domino" effect get our target.
The scout has prepared the map of the minefield.
All mines are placed the same distance apart.
The map is an array of strings, where "x" is a mine and "." is nothing.

You are given a map of the minefield as an array of strings. 
"x" is a mine while "." is an empty spot
All mines are placed the same distance apart. and are 5 meters apart. 
When a mine blows, it will chain react with all mines adjacent to itself (horizontally and vertically but not diagonally.)

The first row of the map is the row closest to the hero, and the first column is the left edge.
When you find which one will get the Cheiftain, step on it and blow her sky high!

The first row in the array is the row nearest to the hero.
*/
// The map and helpful constants are listed below.
let fieldMap = hero.findFriends()[0].getMap();

let mine = "x";
let empty = ".";
let mineDistance = 5;
let firstXPos = 15;
let firstYPos = 40;

// Find which starting mine connects to the ogre Chieftain.
hero.say(fieldMap[y]);

let y = 21; // ∆ Change this to your actual result!

hero.say("I think it's column number: " + y);
let x = y * mineDistance + firstXPos;
hero.moveXY(x, hero.pos.y);
hero.moveXY(x, firstYPos);
