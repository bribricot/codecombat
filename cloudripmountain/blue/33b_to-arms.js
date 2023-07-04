/* Ogres are going to attack soon. Ogres are coming to attack, but your army is asleep!
Move near each of tents (to the X marks)
say() something at each X to wake your soldiers.
Beware: leave the camp when the battle begins!
Ogres will send reinforcements if they see the hero.
Use nested for-loops to move through the camp row by row.
At each X-mark, stop and wake your troops with a hero.say()!
Ogres are coming to attack, and your army is asleep! Wake them up by visiting each tent one-by-one.
Move to the X Mark in front of each tent and use hero.say() to wake the soldiers up.
There are 4 rows with 5 tents in each row.
The sergeant knows the exact distance between tents - every camp is a little different, so don't hard-code the values!

Find the camp's distance usin the sergeant's tentDistanceX and tentDistanceY
let sergeant = hero.findNearest(hero.findFriends());
let stepX = sergeant.textDistanceX;
let stepY = sergeant.tentDistanceY;

Using this information, construct two for-loops to navigate the camp:
let maxY = firstY + tentsInColumn * stepY;
let maxX = firstX + tentsInRow * stepX;

for (let y = firstY; y < maxY; y += stepY) {
    for (let x = firstX; x < maxX; x += stepX) {
        // Now move and say!
		hero.moveXY(x, y);
    }
}

** It is quicker to do row-by-row instead of column-by-column.** 
*/
// The sergeant knows the distance between tents.
let sergeant =  hero.findNearest(hero.findFriends());

// The distances between the X marks.
let stepX = sergeant.tentDistanceX;
let stepY = sergeant.tentDistanceY;
// The number of tents.
let tentsInRow = 5;
let tentsInColumn = 4;

// The first tent mark has constant coordinates.
let firstX = 10;
let firstY = 14;

let maxY = firstY + tentsInColumn * stepY;
let maxX = firstX + tentsInRow * stepX;
// Use nested loops and visit all 20 tents.
// IMPORTANT: move row by row - it's faster.
while (true) {
    for (let y = firstY; y < maxY; y += stepY) {
        for (let x = firstX; x < maxX; x += stepX) {
            // Now move and say!
            hero.moveXY(x, y);
            // Move at the marks near tents and say anything.
    		hero.say("!");
        }
    }
}
// Now watch the battle.
hero.moveXY(4, 5);