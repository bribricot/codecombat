// Practice using modulo to loop over an array

// Choose the mix and order of units you want to summon by populating this array:
var summonTypes = ["soldier", "archer", "archer"];

function summonTroops() {
    // Use % to wrap around the summonTypes array based on hero.built.length
    var type = summonTypes[hero.built.length % summonTypes.length];
    if (hero.costOf(type) <= hero.gold)
        hero.summon(type);
}

function collectCoins() {
    var coin = hero.findNearestItem();
    hero.move(coin.pos);
}

function commandTroops(target) {
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type !== 'palisade')
            hero.command(friends[i], "attack", target);
    }
}

while (true) {
    var enemy = hero.findNearestEnemy();
    collectCoins();
    summonTroops();
    if (enemy)
        commandTroops(enemy);
}