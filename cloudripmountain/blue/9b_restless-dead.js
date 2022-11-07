// This level is supposed to be VERY hard! You may need a great strategy and or gear to complete it!
// Find and defeat the yeti then gather its essence for the ritual.
// You might want to gather the coins the yeti leaves behind, you'll need them to summon an army
// Stand at the summoning stone (red x) to begin summoning
// Now you just have to survive the undead hoard

function pickUpCoin() {
    var coins = hero.findItems();
    for (var i = 0; i < coins.length; i++) {
        hero.moveXY(coins[i].pos.x, coins[i].pos.y);
        if (hero.gold >= 330)
            break ;
    }
}
var summonTypes = ["soldier","archer", "griffin-rider"];
function summonTroops() {
    var type = summonTypes[hero.built.length % summonTypes.length];
    while (hero.costOf(type) <= hero.gold) {
        type = summonTypes[hero.built.length % summonTypes.length];
        hero.summon(type);
    }
}
function commandTroops(enemies) {
    var friends = hero.findFriends();
    // var archer = friends.filter((friend) => friend.type === 'archer');
    var shaman = hero.findByType("Decaying Shaman", enemies);
    var archer = hero.findByType("Decaying Archer", enemies);
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type === 'soldier' && enemies[i])
            hero.command(friends[i], "attack", enemies[i]);
        if (friends[i].type === 'griffin-rider' && shaman)
            hero.command(friends[i], "attack", friends[i].findNearest(shaman));
        if (friends[i].type === 'archer' && archer)
            hero.command(friends[i], "attack", friends[i].findNearest(archer));
    }
    
}

hero.moveXY(59, 17);
var enemy = hero.findNearestEnemy();
while (enemy && enemy.health > 0) {
    hero.attack(enemy);
}
pickUpCoin();
hero.moveXY(19, 40);
summonTroops();

while (true) {
    var enemies = hero.findEnemies();
    if (enemies)
        commandTroops(enemies);
}
