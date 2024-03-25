/*
We need to clear the forest of traps!
The scout prepared a map of the forest.
But be careful where you shoot! Don't start a fire.

Spring is coming! The time for the big cleaning!
We need to clear the forest and we have the cannon and the forest map for that.
But the map has rows with different lengths, so be sure before a shot.
We can't afford to shoot everywhere - ammo is expensive and we have just enough to clean traps.

The map is an array of arrays, where 1 is clear and 0 is a trap. Like:
[[1, 1, 0],
 [0, 1],
 [1, 1, 0, 0, 1]]

Say the row and the column of the map where the artillery should shoot.
We prepared the cell coordinates (you'll find them in the sample code) which you need to check.
The map is an array of arrays, where 1 is clear and 0 is a trap. Like:
let forestMap = [
    [1, 1, 0],
    [0, 1],
    [1, 1, 0, 0, 1]]

As we can see rows of that arrays have different lengths. 
So we need to check the correctness of coordinates before to get access, else you can get an error.

// The correct row, but the wrong column:
forestMap[0][4] // undefined
// The wrong row, any column
forestMap[5][1] // TypeError, because forestMap[5] is undefined

It's a good practice to check indexes before access them if you aren't sure it.
For example, if you get access to random cell by random or outer source coordinates.

To check the existence of the cell you can check if it's less than the length of the array
(We don't consider negative indexes here):

let row = 1;
let col = 3;
if (row < forestMap.length) {
    // if 'row' is correct index
    if (col < forestMap[row].length) {
        // now we can get the cell
        hero.say(forestMap[row][col]);
    }
}
It can be written shorter with logic operators:
// The second part is checked only if the first is true
if (row < forestMap.length && col < forestMap[row].length) {
        hero.say(forestMap[row][col]);
}
*/
// Get the map of the forest.
let forestMap = hero.findNearest(hero.findFriends()).forestMap;

// The map is a 2D array where 0 is a trap.
// The first sure shot.
hero.say("Row " + 0 + " Column " + 1 + " Fire!");

// But for the next points, check before shooting.
// There are an array of points to check.
let cells = [{row: 0, col: 4}, {row: 1, col: 0}, {row: 1, col: 2}, {row: 1, col: 4},
    {row: 2, col: 1}, {row: 2, col: 3}, {row: 2, col: 5}, {row: 3, col: 0},
    {row: 3, col: 2}, {row: 3, col: 4}, {row: 4, col: 1}, {row: 4, col: 2},
    {row: 4, col: 3}, {row: 5, col: 0}, {row: 5, col: 3}, {row: 5, col: 5},
    {row: 6, col: 1}, {row: 6, col: 3}, {row: 6, col: 4}, {row: 7, col: 0}];

for (let i = 0; i < cells.length; i++) {
    let row = cells[i].row;
    let col = cells[i].col;
    // If row is less than forestMap length:
    
        // If col is less than forestMap[row] length:
        
            // Now, we know the cell exists.
            // If it is 0, say where to shoot:
            
}
