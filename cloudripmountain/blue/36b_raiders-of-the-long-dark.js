// Your goal is to protect the peasant and move to the right.
// Arryn Stonewall will defend the front, and command the soldiers.
// You need to cover the rear and command the peasant.

let arryn = hero.findByType("raider")[0];
let peasant = hero.findByType("peasant")[0];

function chooseHeroStrategy() {
    let enemy = peasant.findNearestEnemy();
    // Return either "fight" or "advance".
    // Try to stay 5m behind the peasant when not fighting.
    // Don't get more than 15m away from the peasant.
    if (hero.distanceTo(peasant) > 15 || !enemy) {
        return "advance";
    } else {
        return "fight";
    } 
}

function heroFight() {
    // Stop the ogres from rushing past you to get to the peasant!
    // Hint: try to slow them down if you can
    let enemy = peasant.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) <= 16) {
        hero.attack(enemy);
    }
}

function heroAdvance() {
    // Stay behind the peasant, 5m behind en x
    hero.move({"x":peasant.pos.x - 5,  "y":peasant.pos.y});
}

function choosePeasantStrategy() {
    // Return "follow", "build-above", or "build-below"
    // Hint: use isPathClear() to determine where the hallways are
    //Qqn devant y+15
    if (hero.isPathClear(peasant.pos, {"x": peasant.pos.x, "y":peasant.pos.y + 15})) 
        return "build-above";
    //Qqn derrière y-15
    else if (hero.isPathClear(peasant.pos, {"x": peasant.pos.x, "y": peasant.pos.y - 15}))
        return "build-below";
    else
        return "follow";
}

function peasantAdvance() {
    // Keep the peasant behind Arryn and her soldiers.
    hero.command(peasant, 'move', {"x":arryn.pos.x, "y": arryn.pos.y});
}

function peasantBuild(x,y) {
    // Command the peasant to build a palisade.
    hero.command(peasant, 'buildXY', 'palisade', x, y)   
}

while(true) {
    let heroStrategy = chooseHeroStrategy();
    if(heroStrategy == "fight") {
        heroFight();
    } else if(heroStrategy == "advance") {
        heroAdvance();
    }
    
    let peasantStrategy = choosePeasantStrategy();
    if (peasantStrategy == "build-above") {
        peasantBuild(peasant.pos.x, peasant.pos.y + 5);
    } else if (peasantStrategy == "build-below") {
        peasantBuild(peasant.pos.x, peasant.pos.y - 5);
    } else if(peasantStrategy == "follow") {
        peasantAdvance();
    }
}
