/* 
Set up a field of mines to trap incoming ogres!
The answer lies in a set of nested arrays, so lay out the fire-traps carefully.

Ogres have taken some peasants hostage!
The scouts have given you intel for an ambush.
hero.grid holds an array of arrays.

Inside the sub-arrays :
- 0 is a peasant,
- 1 is an ogre

Use this information to setup fire-traps.

Ogres have captured a group of peasants, and it's your job to save them.
Luckily a scout has gone ahead and found out what the layout of the ogres will be and reported this information back as nested arrays.

A nested array, or 2D array, is an array containing... more arrays! Look at the following code:

let doubleArray = [[1, 2],[3, 4]];

A bit confusing at first, but if we clean up the code, we can better understand how it works:

let doubleArray = [
    [1,2],
    [3,4]
];

let row1 = doubleArray[0]; // This is [1,2]!
let cell1 = row1[0]; // This is 1!

However, if you're real crafty, you can double up these index calls like so:

let doubleArray = [
    [1,2],
    [3,4]
]
let cell1 = doubleArray[0][0]; // This is 1!

Now that the structure is more apparent, to access a specific element you will use the familiar [index] notation. Remember the containing array is just an array!
*/

// Iterate over all the elements of this array.
for (let i = 0; i < hero.grid.length; i++) {
    let row = hero.grid[i];
    // Now, row is just another array!
    // Iterate over all the tiles in this array:
    for (let j = 0; j < row.length; j++) {
        // Check if the tile at i, j is 1 to build:
        if (row[j] == 1) {
        //hero.buildXY("fire-trap", 36 + 6 * j, 20 + 6 * i);
            hero.buildXY("fire-trap", 36 + 6 * j, 20 + 6 * i);
        }
    }
}
// Finally, retreat back to cover.
hero.moveXY(29, 55);
