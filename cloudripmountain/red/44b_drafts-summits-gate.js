// Fight your way into the Inner Sanctum of the ogre chieftain, and defeat her.
let summonTypes = ["soldier","archer"];
let defendPoints = [{"x": 35, "y": 63},{"x": 61, "y": 63},{"x": 32, "y": 26},{"x": 64, "y": 26}];

function summonTroops() {
    let type = summonTypes[hero.built.length % summonTypes.length];
    while (hero.costOf(type) <= hero.gold) {
        type = summonTypes[hero.built.length % summonTypes.length];
        hero.summon(type);
    }
}
function commandTroops(enemies) {
    let friends = hero.findFriends();
    let allEnemies = hero.findEnemies();
    let catapults = hero.findByType("catapult", allEnemies);
    let paladin =  hero.findByType("paladin");
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].type === 'archer' && allEnemies[i])
            if (allEnemies) 
                hero.command(friends[i], "attack", friends[i].findNearest(allEnemies));
        if (friends[i].type === 'soldier' && allEnemies[i])
            hero.command(friends[i], "attack", allEnemies[i]);
        else if (friends[i].type === 'soldier' && catapults[i]) 
            hero.command(friends[i], "attack", friends[i].findNearest(catapults));

	}
}

//Functions paladins
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
function commandPaladin(paladin) {
    let enemy = hero.findNearest(hero.findEnemies());
    let friends = hero.findNearest(hero.findFriends());
    let lowest = lowestHealthPaladin();
    hero.command(paladin, "shield");
    if (enemy) 
        hero.command(paladin, "attack", enemy);
    if (lowest && paladin.canCast("heal", lowest)) {
        hero.command(paladin, "cast", "heal", lowest);
    }
}

while (true) {
    summonTroops();
    commandPaladin(paladin);
    let enemies = hero.findEnemies();
    if (enemies) {
        commandTroops(enemies);
    	for (let i = 0; i < friends.length; i++) {
        	let distance = hero.distanceTo(friends[i]);
        	if (friends[i].type == "paladin") {
            	if (enemyMissiles && distance < 10)
                	hero.command(friends[i], "shield", nearestMissiles);
        	}
        }
    }
    hero.move({x: hero.pos.x + 0.5, y:hero.pos.y});
}
