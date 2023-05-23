/*
We must lure this huge ogre through the temple of the Moon and the Sun. 
He is near-sighted and that will give us plenty of time to prepare a trap.

There are four pairs of twins, they should pray by pairs. You need to find twins and call them.
Use pairs of twins to awake the powers of the Sun and Moon!
Say each twin's name seperated by a space: 
hero.say(twin1.id + " " + twin2.id)

The code to check if two paladins are twins has been given to you: 
areTwins(unit1, unit2)

You will need to iterate over each element each time you iternate over all the elements! Confusing, yes, but observe the following code for help:
for (let i = 0; i < array.length; i++) {
    let elemI = array[i];
    for(let j = 0; array.length; j++) {
        if (i == j) {
            continue;
        }
        let elemJ = array[j];
        // Check if the two elements match

            // Say each of the element's id.

    }
}
Be sure to move forward/backwards to lure the ogre through the trap.
Twins have the same names, only the last letter is different.
*/

// This function checks if the pair of units are twins.
function areTwins(unit1, unit2) {
    let name1 = unit1.id;
    let name2 = unit2.id;
    if (name1.length !== name2.length) {
        return false;
    }
    for (let i = 0; i < name1.length - 1; i++) {
        if (name1[i] !== name2[i]) {
            return false;
        }
    }
    return true;
}

while (true) {
    let paladins = hero.findByType("paladins");
	for (let i = 0; i < paladins.length; i++) {
	    for (let j = i + 1; paladins.length; j++) {
	    	twin1 = paladins[i];
	        twin2 = paladins[j];
	        // Check if the two elements match
	    	if (areTwins(twin1, twin2))
	            // Say each of the element's id.
	    		//hero.say(pairOfNames[0] + " " + pairOfNames[1]);
	    		hero.say(twin1.id + " " + twin2.id)
	    }
	}
}

// Iterate over all pairs of paladins and say() their name by pairs if they are twins.

// For example: hero.say("NameTwin1 NameTwin2")

// When twins are in their spots, lure the ogre.
// Don't be afraid of beams - they are dangerous only for ogres.
