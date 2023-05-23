// Goal: build three rows of nine fire-traps.

// Returns "retreat", "attack", "start-next-trap-column", or "build-next-trap-in-column"
function chooseStrategy() {
    let enemies = hero.findEnemies();

    // If there are overwhelming ogre forces, return the "retreat" strategy.
    if (enemies.length > 20) {
        return "retreat";
    }
    // If there are some ogres, return the "attack" strategy.
    if (enemies.length > 0)  
        return "attack";
    // Use x % 9 === 0 to see if x is divisible by 9.
    // Use this.built.length to see how many traps you have built.
    // If you have finished a column of 9 traps, return "start-next-trap-column"
    if (hero.built.length % 9 === 0) {
        return "start-next-trap-column";
    }
    // Otherwise, return "build-next-trap-in-column"
    else {
        return "build-next-trap-in-column";

    }
}

let trapsInColumn = 9;
let startX = 40;
let columnX = startX;

// Build the next trap in a column in the correct place.
function buildNextTrapInColumn(columnX,numTraps) {
    // Change newY to use % to wrap around and only build trapsInColumn (9) traps per column
    let newY = 7 * (numTraps % 9) + 10; // ∆ Change this to use % 9!
    if (hero.pos.y < newY) {
        hero.move({"x": columnX - 5, "y": newY});
    } else {
        buildTrap(columnX,newY);
    }
}

// Start a new column of traps.
function startNextTrapColumn(columnX, numTraps) {
    let newX = startX - (Math.floor(numTraps / trapsInColumn) * 6);
    if (hero.pos.y > 10) {
        hero.move({"x": newX - 5, "y": 10});
        return columnX;
    } else {
        buildTrap(newX,10);
        return newX;
    }
}

function buildTrap(x, y) {
    hero.buildXY("fire-trap", x, y);
}


function commandAttack() {
    // Have your griffin riders fend off the attackers
let griffins = hero.findByType("griffin-rider");
let enemy = hero.findNearestEnemy();
    for (let i = 0; i < griffins.length; i++) { 
            hero.command(griffins[i], 'attack', enemy);
            continue;
        }
}

function commandRetreat() {
    hero.say("Retreat!");
    // You and your griffin riders retreat to safety behind the traps.
    hero.moveXY(4, 42);
}

while (true) {
    let strategy = chooseStrategy();
    if (strategy == "attack") {
        commandAttack();
    } else if (strategy == "build-next-trap-in-column") {
        buildNextTrapInColumn(columnX, hero.built.length);
    } else if (strategy == "start-next-trap-column") {
        columnX = startNextTrapColumn(columnX, hero.built.length);
    } else if(strategy == "retreat") {
        commandRetreat();
    }
}