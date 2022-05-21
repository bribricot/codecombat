while(true) {
    // Collect gold.
    var coins = hero.findNearest(hero.findItems());
    hero.move(coins.pos);
    // If you have enough gold, summon a soldier.
    if (hero.gold > hero.costOf("soldier"))
        hero.summon("soldier");
    // Use a for-loop to command each soldier.
    var friends = hero.findFriends();

    for(var i = 0; i < friends.length; i++) {

        if(friends[i].type == "soldier") {
            var enemy = friends[i].findNearestEnemy();
            // If there's an enemy, command her to attack.
            // Careful! If your soldiers are defeated, a warlock will appear!
            if (enemy) {
                hero.command(friends[i], "attack", enemy);
            }
            // Otherwise, move her to the right side of the map.
            else {
                hero.command(friends[i], "move", {x: 70, y:46});
            }
            if (friends[i].health < 100) {
                hero.command(friends[i], "move", {x: 21, y:42});
            }
        }
    }
}
