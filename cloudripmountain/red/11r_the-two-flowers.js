// If the peasant is damaged, the flowers will shrink!

function summonSoldiers() {
    if (hero.gold >= hero.costOf("soldier")) {
        hero.summon("soldier");
    }
}

// Define the function: commandSoldiers
function commandSoldiers() {
var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type == "soldier") {
            var enemy = friends[i].findNearestEnemy();
            if (enemy) {
                hero.command(friends[i], "attack", enemy);
            }
        }
    }
}

// Define the function: pickUpNearestCoin
function pickUpNearestCoin() {
var coins = hero.findItems();
var nearest = hero.findNearest(coins);
    hero.move(nearest.pos);    
}

var peasant = hero.findByType("peasant")[0];

while(true) {
    summonSoldiers();
    // commandSoldiers();
    commandSoldiers();
    // pickUpNearestCoin();
    pickUpNearestCoin();
}
