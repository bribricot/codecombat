// Fight your way into the Inner Sanctum of the ogre chieftain, and defeat her.
let summonTypes = ["soldier","archer"];
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

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].type === 'archer' && allEnemies[i])
            if (allEnemies) 
                hero.command(friends[i], "attack", friends[i].findNearest(allEnemies));
        if (friends[i].type === 'soldier' && allEnemies[i])
            hero.command(friends[i], "attack", allEnemies[i]);
        f (friends[i].type === 'soldier' && catapults[i]) 
            hero.command(friends[i], "attack", friends[i].findNearest(catapults));

	}
}



while (true) {
    summonTroops();
    let enemies = hero.findEnemies();
    if (enemies)
        commandTroops(enemies);
    hero.move({x: hero.pos.x + 0.5, y:hero.pos.y});
}
