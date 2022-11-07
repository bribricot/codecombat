// Gather coins to summon soldiers and have them attack the enemy.

while (true) {
    // Move to the nearest coin.
    // Use move instead of moveXY so you can command constantly.
    var coins = hero.findItems();
    var nearest = hero.findNearest(coins);
    hero.move(nearest.pos);
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
    var enemy = hero.findNearest(hero.findEnemies());
    if (enemy) {
        var soldiers = hero.findFriends();
        var i = 0;
        while (i < soldiers.length) {
            hero.command(soldiers[i], "attack", enemy);
            i++;
        }
    }
}
