// This function has an argument named soldier.
// Arguments are like variables.
// The value of an argument is determined when the function is called.


// Collect coins.
function pickUpCoin() {
    var coins = hero.findItems();
    for (var i = 0; i < coins.length; i++) { 
        var coin = hero.findNearest(coins);
        hero.move(coin.pos);
    }
}
// Summon soldiers if you have the gold.
function summonTroops() {
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
}

//Attack soldier
function commandSoldier(soldier) {
    var enemy = soldier.findNearestEnemy();
    if (enemy) {
        hero.command(soldier, "attack", enemy);
    }
}

// Archers should only attack enemies who are closer than 25 meters, otherwise, stay still.

function commandArcher(archer) {
    var enemy = archer.findNearestEnemy();
    if (enemy && archer.distanceTo(enemy) < 25) {
        hero.command(archer, "attack", enemy);
    }
    else
        hero.command(archer, "move", {x: archer.pos.x, y: archer.pos.y});
}
// It should take one argument that will represent the archer passed to the function when it's called.
// Archers should only attack enemies who are closer than 25 meters, otherwise, stay still.

while (true) {
    
    var friends = hero.findFriends();
    summonTroops();
    pickUpCoin();

    for(var i = 0; i < friends.length; i++) {
        if (friends[i].type == "soldier") {
            // This friend will be assigned to the variable soldier in commandSoldier
            commandSoldier(friends[i]);
        } else if (friends[i].type == "archer") {
            commandArcher(friends[i]);
        }
    }
}


