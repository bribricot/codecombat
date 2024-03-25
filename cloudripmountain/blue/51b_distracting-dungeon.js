/* Navigate the mountain maze with a peasant pal.
Advanced while-loop usage is required!
This level focuses on advanced while-loops usage. Listed below are concepts to help visualize what kind of loops are involved.
function moveBothTo(point) {
    while(hero.distanceTo(point) > 1) {
        hero.move(point);
        hero.command(peasant, "move", point);
    }
}
- Moving multiple using towards a point.
- Defeating all at any given stage before continuing through the rest of a loop.
- Attacking an enemy until it is defeated.
- Waiting until a peasant catches up with a potentially faster hero.

1) An example of moving multiple units towards a point:

let point = {x: 20, y: 20};
let friends = hero.findFriends(); // In this level, there is only 1 friend!
while(hero.distanceTo(point) > 0.5) {
    hero.move(point); 
    // The hero.move() method allows the hero to perform actions inbetween steps!
    for(let i = 0; i < friends.length; i++) { 
    // In this level, you won't need to use a for-loop with only 1 friend.
        hero.command(friends[i], "move", point);
    }
}

2) An example of defeating all enemies inside a while loop:

while(true) {
    hero.moveXY(hero.pos.x + 20, hero.pos.y);
    let enemy = hero.findNearestEnemy();
    while(enemy) {
        hero.attack(enemy);
        enemy = hero.findNearestEnemy(); // Update the variable for the inner while-loop to verify.
    }
}

3) An example of defeating an enemy before moving to the next one:
let enemy = hero.findNearestEnemy();
while(enemy.health > 0) {
    hero.attack(enemy); // This will continue to attack the enemy until it runs out of health.
}

4) An example of checking the distance with a unit other than the hero;

let friend = hero.findNearest(hero.findFriends());
let point = {x:20, y:20};
while(friend.distanceTo(point) > 0.5) { // Note nothing much changes other than checking the distance from the peasant to the point.
    hero.move(point);
    hero.command(friend, "move", point);
}

*/function moveBothTo(point) {
    while(hero.distanceTo(point) > 1) {
        hero.move(point);
        hero.command(peasant, "move", point);
    }
}

let peasant = hero.findNearest(hero.findFriends());
while(true) {
    // Command your friend to build a decoy towards x + 1:
    hero.command(peasant, "buildXY", "decoy", peasant.pos.x + 2, peasant.pos.y);
    let nextPoint = {x: hero.pos.x, y: hero.pos.y + 28};
    moveBothTo(nextPoint);
    // Create a new x/y object +28 units away in the x dir:
    nextPoint = {x: hero.pos.x + 28, y: hero.pos.y};
    // Find the nearest enemy:
    let enemy = hero.findNearestEnemy();
    // While there is an enemy:
    while(enemy) {
        // While the enemy's health is > 0:
        while(enemy.health > 0) {
            // Attack the enemy:
            if (enemy) {
                hero.attack(enemy);
            }
        }
        // Update the variable to the next nearest enemy:
        enemy = hero.findNearestEnemy();
    }
    moveBothTo(nextPoint);
}
