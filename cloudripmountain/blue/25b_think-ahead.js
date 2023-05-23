/* You need to distract "Big Bertha" until you special squad arrives.
The cannon shoots at the pair of soldiers closest to each other.
If you know the next move of your enemy, then you are invulnerable.

findNearestPair finds the pair of units with the minimum distance between them.*/ 

function findNearestPair(units) {
    var minDistance = Infinity;
    var nearestPair = ["Nobody", "Nobody"];
    // You need to check and compare all pairs of units.

    // Iterate all units with indexes "i" from 0 to "units.length".
    for (let i = 0; i < units.length; i++) {
        // Iterate all units again with indexes "j".
        for (let j = i + 1; j < units.length; j++) {
            // If "i" is equal to "j", then skip (continue).
            // Find the distance between the i-th and j-th units.
            let distance = units[i].distanceTo(units[j]);
            // If the distance less than 'minDistance':
            if (distance < minDistance) {
                // Reassign 'minDistance' with the new distance.
                 minDistance = distance;
                // Reassign 'nearestPair' to the id's
                // of the current pair of units.
                nearestPair[0] = units[i].id;
                nearestPair[1] = units[j].id;
            }
        }
    }
    return nearestPair;
}

while (true) {
    var soldiers = hero.findByType("soldier");
    // We know when the cannon shoots.
    if (hero.time % 8 === 5) {
        // Find which pair of soldiers in danger and protect them.
        var pairOfNames = findNearestPair(soldiers);
        // Say the soldier's names and wizards will protect them.
        hero.say(pairOfNames[0] + " " + pairOfNames[1]);
    }
}
