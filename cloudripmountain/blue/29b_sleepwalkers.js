/* 
This village is an anomaly. There are too many sleepwalkers and they often walk out the village.
But it's only half of the problem. There are sleepwalking yetis and they are following our returning peasants.

Senick is an experienced hunter and he knows everything about yetis. He can calculate and predict their routes.
Senick prepared the grid map of the fence system. You should use that scheme and build fences where it's required.

The map is represented as 2d-array (an array of arrays) with numbers (1 or 0). 0 is an empty cell, 1 is a place where to build a fence.

The grid map is an array of arrays where each element can be 1 or 0.
0 is an empty cell, 1 is a place where to build a fence.

In previous levels you've learnt how to loop through 2d-arrays and get their element values.
Use nested loops and array[i][j] syntax to read all values and if you meet 1, then build a fence there.
There is a prepared function convertCoordinates to convert grid coordinates (row and column) to (x, y) coordinates.
Example : 
// For 2-nd row, 3-rd column:
convertCoordinates(2, 4); // result: {x: 42, y: 38}

Don't forget in the village when fences are built, because yetis can smell the hero.
**

Our sleepwalking peasants are returning.
But sleeping yetis are also coming.
DON'T WAKE THEM UP!
Build fences to let peasants through and stop yetis.

*/
// Senick's prepared the grid map how to build fences.
let hunter = hero.findNearest(hero.findFriends());
let fenceMap = hunter.getMap();

// This function converts grid into XY coordinates.
function convertCoordinates(row, column) {
    return {x: 34 + column * 4, y: 26 + row * 4};
}


// Iterate over fenceMap and build at fence at all 1s.
for (let row = 0; row < fenceMap.length; row++) {
	for (let column = 0; column < fenceMap.length; column++) {
		if (fenceMap[row][column] === 1) {
			let coordinates = convertCoordinates(row, column);
			hero.buildXY('fence', coordinates.x, coordinates.y);
		}
	}
}

// Move back to the village after building the fences.
hero.moveXY(6, 34);
