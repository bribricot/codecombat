// Your goal is to protect the peasant and move to the right.
// Arryn Stonewall will defend the front, and command the soldiers.
// You need to cover the rear and command the peasant.

var arryn = hero.findByType("raider")[0];
var peasant = hero.findByType("peasant")[0];

function chooseHeroStrategy() {
    // Return either "fight" or "advance".
    // Try to stay 5m behind the peasant when not fighting.
    // Don't get more than 15m away from the peasant.
    
}

function heroFight() {
    // Stop the ogres from rushing past you to get to the peasant!
    // Hint: try to slow them down if you can
    
}

function heroAdvance() {
    // Stay behind the peasant
    
}

function choosePeasantStrategy() {
    // Return "follow", "build-above", or "build-below"
    // Hint: use isPathClear() to determine where the hallways are
    
}

function peasantAdvance() {
    // Keep the peasant behind Arryn and her soldiers.
    
}

function peasantBuild(x,y) {
    // Command the peasant to build a palisade.
    
}

while(true) {
    var heroStrategy = chooseHeroStrategy();
    if(heroStrategy == "fight") {
        heroFight();
    } else if(heroStrategy == "advance") {
        heroAdvance();
    }
    
    var peasantStrategy = choosePeasantStrategy();
    if(peasantStrategy == "build-above") {
        peasantBuild(peasant.pos.x, peasant.pos.y + 5);
    } else if(peasantStrategy == "build-below") {
        peasantBuild(peasant.pos.x, peasant.pos.y - 5);
    } else if(peasantStrategy == "follow") {
        peasantAdvance();
    }
}
