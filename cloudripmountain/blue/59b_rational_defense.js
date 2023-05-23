/*Use fortification intelligently or read the list carefully.
Ogres are going to attack from the front and the back.
Protect the peasants.
Build defensive structures in the right order to protect the peasants from the forest attack.
You've learnt how to use str.split(separator)  method in previous levels.
Don't forget that this method returns an array of strings.
If you have problems with this level, then try previous levels and return after refreshing your skills.*/


// Move the peasants away from the woods.
function hideUnits(units) {
    for (let i = 0; i < units.length; i++) {
        hero.command(units[i], "move", {x: 34, y: 10 + i * 12});
    }
}

// The peasants know the order in which to build the traps.
let peasants = hero.findFriends();
let buildOrder = peasants[0].buildOrder;
let separator = ",";
// Split buildOrder with a comma (",")
// and save the result to the variable `types`:
let types = buildOrder.split(separator);
// There are the same number of peasants as types. (i partagés)
for (let i = 0; i < peasants.length; i++) {
    let x = 16;
    let y = 10 + i * 12;
    let buildType = types[i];
    hero.command(peasants[i], "buildXY", buildType, x, y);
}

// Watch for enemies and move peasants when ogres attack.
while(true) {
    let enemy = hero.findNearestEnemy();
    if (enemy) {
        hideUnits(peasants);
        break;
    }
}

while (true){ 
let enemy = hero.findNearestEnemy();
if (enemy)
    hero.attack(enemy);
}