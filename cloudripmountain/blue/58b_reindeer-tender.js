/*
In this level, you will use arrays to organize the reindeer. You start with three arrays:

*An array of positions that the reindeer will go to.
*An array that is used to mark which reindeer are in which pens.
*An array of the reindeer themselves.

The first step is to figure out which reindeer are already in their pens. To do this, loop through the reindeer. For each one, loop through each pen position. If the pen position matches the reindeer's position, it's already there. Use the campOccupants and friends arrays to keep track of which reindeer are already asleep -- when a reindeer is in a pen, move the reindeer from the friends array to the campOccupants array to track it.

Next, you'll go through the friends  array again to look at the remaining reindeer (the ones that aren't already in the camps). For each one, Look through the campOccupants array for the first spot that doesn't  have a reindeer in it. When you find one, command the reindeer to move to the spot.

If everything goes well, you'll have one reindeer sleeping peacefully in each pen!

You'll need to change the campOccupants and the friends arrays quite a bit to get through this level!
*/

// This is the array of pen positions
let campPositions = [ {"x":20,"y":24}, {"x":28,"y":24}, {"x":36,"y":24}, {"x":44,"y":24}, {"x":52,"y":24} ];

// Use this array to keep track of each pen's reindeer.
let campOccupants = [ null, null, null, null, null ];

// And this array contains our reindeer.
let friends = hero.findFriends();

// Figure out which reindeer are already in their pens.
for (let i = 0; i < friends.length; i++) {
    // For each position check if it matches a reindeer.
    for (let j = 0; j < campPositions.length; j++) {
        if (campPositions[j].x == friends[i].pos.x && campPositions[j].y == friends[i].pos.y) {
            // Put the reindeer in occupants at j
            friends[i] = campOccupants[j];
            // Remove the reindeer from the friends array.
            
            // break out of the inner loop here:
            break;
        }
    }
}

// Assign the remaining reindeer to new positions.
for (i = 0; i < friends.length; i++) {
    // If the reindeer is null, use continue:
    if (friends[i] === null)
        continue;
    // Look for the first pen with nothing.
    for (let k = 0; k < campOccupants.length; k++) {
    //hero.say("Camp " + k + " is " + campOccupants[k]);
        // If there is nothing, the pen is open:
        if (campOccupants[k] === null) {
            // Put the reindeer in the occupants array.
            friends[i] = campOccupants[k];
            // Command the reindeer to move to the pen.
            friends[i] = campPositions[i];
            // break out early so we don't reassign:
            break;
        }
    }
}
