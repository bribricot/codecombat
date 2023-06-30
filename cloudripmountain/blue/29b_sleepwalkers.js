// Our sleepwalking peasants are returning.
// But sleeping yetis are also coming.
// DON'T WAKE THEM UP!
// Build fences to let peasants through and stop yetis.


// Senick's prepared the grid map how to build fences.
var hunter = hero.findNearest(hero.findFriends());
var fenceMap = hunter.getMap();

// This function converts grid into XY coordinates.
function convertCoor(row, col) {
    return {x: 34 + col * 4, y: 26 + row * 4};
}


// Iterate over fenceMap and build at fence at all 1s.


// Move back to the village after building the fences.

