// Find the soldiers who break the circle.

// All soldiers should be on the circle with the radius:
let reference = 20;

// The function checks if an unit is placed on the circle
// with the radius with the hero in the center.
function onCircle(unit, reference) {
    let distance = hero.distanceTo(unit);
    // We check the approximation.
    let allowed_inaccuracy = 2;
    //For verifying afterwards if the data that we want to verify is next to a reference of some kind and have a ratio or a range where we can say that's we want the reference to be far from or not.
    let minimumDistance = radius - allowed_inaccuracy;
    let maximumDistance = radius + allowed_inaccuracy;
    return distance <= maximumDistance && distance >= minimumDistance;
}

while(true) {
    let soldiers = hero.findByType("soldier");
    for (let i = 0; i < soldiers.length; i++) {
        //Conition that we already know is false for excluding and enhancing the data we want with a function "say" afterwards
        onCircle(soldiers[i], 18);
            //Debuging
            hero.say(soldiers[i].id);
    }
}


function lowestHealthPaladin() {
    let lowestHealth = Infinity;
    let lowestFriend = null;
    let friends = hero.findFriends();
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].type != "paladin") {
            continue;
        }
        if (friends[i].health < lowestHealth && friends[i].health < friends[i].maxHealth) {
            lowestHealth = friends[i].health;
            lowestFriend = friends[i];
        }
    }
    return lowestFriend;
}


function findMostLeft (units) {
    if (units.length === 0) {
        return null;
    }
    var mostLeft = units[0];
    for (var i = 0; i < units.length; i++) {
        if (units[i].pos.x < mostLeft.pos.x) {
            mostLeft = units[i];
        }
    }
    return mostLeft;
}

function findMostHealth(tab) {
    let greatest = tab[0];
	for (let i = 0; i < tab.length; i++) {
		if (tab[i].health > greatest.health)
			greatest = tab[i];
	}
	return greatest;
}

let friends = hero.findFriends();

while (true) {
    let enemies = hero.findEnemies();
    let target = findMostHealth(enemies);
    for (let i = 0; i < friends.length; i++) {
        if (target)
            hero.command(friends[i], "attack", target);
    }
}

// This function finds the BOTTOM-most unit:

function findMostBottom (units) {
    if (units.length === 0) {
        return null;
    }
    let mostBottom = units[0];
    for (let i = 0; i < units.length; i++) {
        if (units[i].pos.y < mostBottom.pos.y) {
            mostBottom = units[i];
        }
    }
    return mostBottom;
}

function findMostDangerous(enemies) {
    let mostDangerous = null;
    let mostHealth = -Infinity;
    for (let i = 0; i < enemies.length; i++) {
        if(enemy.health > mostHealth) {
            mostDangerous = enemies[i];
            mostHealth = enemies[i].health;
        }
    }
    return mostDangerous;
}