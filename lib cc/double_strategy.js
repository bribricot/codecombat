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


//Defend des positions en deux phases avec un fonctionnement en interrupteur 

// Defend these two positions:
var defend = [];
defend[0] = { x: 98, y: 28 };
defend[1] = { x: 84, y: 7 };

var soldiers = [];

if (hero.gold >= hero.costOf('soldier'))
    hero.summon("soldier");

var friends = hero.findFriends();
for(var i=0; i < friends.length; i++) {
    var friend = friends[i];
    if(friend.type == "soldier") {
        soldiers.push(friend);
    } else {
        // Defend the workers:
        defend.push(friend);
    }
}


var phase = 0;


while(true) {
    // Use a for-loop to assign each soldier to a corresponding defend[] target
    // Use command(soldier, "defend", thang) or command(soldier, "defend", position)
    for (var i = 0; i < defend.length; i++) {
        hero.command(soldiers[i], "defend", defend[i]);
    }
    while (phase === 0 && (hero.pos.x < 90 || hero.pos.y < 70))
        hero.move({x: 97, y: 70});
    phase++;
    if (phase === 1) {
        var items = hero.findItems();
        for (var i = 0; i < items.length; i++)
            hero.move(items[i].pos);
    }

// AU CAS OÙ ON VEUT LE FAIRE À L'ENVERS

// for (var i = items.length - 1; i >= 0; i--)
//    hero.move(items[i].pos);

    phase++;
    while (phase === 2 && hero.pos.x < 39)
        hero.move({x: 39, y: 68});

    phase++;

    var enemy = hero.findNearestEnemy();
    if (enemy)
        hero.attack(enemy);
}
