// The goal is to survive for 30 seconds, and keep the mines intact for at least 30 seconds.

function chooseStrategy() {
    var nearestFangrider = hero.findNearest(hero.findByType('fangrider'));
    // If you can summon a griffin-rider, return "griffin-rider"
    if (hero.gold >= hero.costOf("griffin-rider"))
        return "griffin-rider";
    // If there is a fangrider on your side of the mines, return "fight-back"
    if (nearestFangrider && nearestFangrider.pos.x < 40)
        return "fight-back";
    if (hero.time > 53)
        return "final-flash";
    // Otherwise, return "collect-coins"
    return "collect-coins";
}

function commandAttack() {
    // Command your griffin riders to attack ogres.
    hero.summon("griffin-rider");
    hero.command(hero.built[hero.built.length - 1], "defend", {x: 59, y: 40});
}

function pickUpCoin() {
    // Collect coins
    var coin = hero.findNearestItem();
    hero.move(coin.pos);
}

function heroAttack() {
    // Your hero should attack fang riders that cross the minefield.
    var target = hero.findNearestEnemy();
    if (target)
        hero.attack(target);
}

function finalFlash() {
    if (hero.isReady('flash'))
        hero.flash();
}

while(true) {
    var strategy = chooseStrategy();
    // Call a function, depending on what the current strategy is.
    if (strategy === 'griffin-rider')
        commandAttack();
    else if (strategy === 'fight-back')
        heroAttack();
    else if (strategy === 'final-flash')
        finalFlash();
    else
        pickUpCoin();
}

// IMPLEMENT OGRE ONLY
// DETECT FANGRIDER ON OTHER SIDE OF MINES

	