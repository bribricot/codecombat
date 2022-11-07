    // For-loops have 3 parts, separated by semicolons.
    // for(initialization; condition; expression)
    // Initialization is done at the start of the first loop.
    // The loops continue while condition is true.

while(true) {
    // Collect gold.
    var coins = hero.findNearest(hero.findItems());
    hero.move(coins.pos);

    if (hero.gold > hero.costOf("soldier"))
        hero.summon("soldier");

    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type == "soldier") {
            var enemy = friends[i].findNearestEnemy();
            if (enemy) {
                hero.command(friends[i], "attack", enemy);
            }   
             else {
                 hero.command(friends[i], "move", ({x: 82, y: 41}));
             }
        }
    }
}
