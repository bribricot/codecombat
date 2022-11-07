// You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours.

var friends = hero.findFriends();

while (true) {
    // Use for-loop and for each friend:

    for (var i = 0; i < friends.length; i++) {
        // If they see an enemy then command to attack.
        var enemy = friends[i].findNearestEnemy();
        
        if (enemy) {
        // Command to move east by small steps.
            hero.command(friends[i], "attack", enemy);
        }
        else {
            hero.command(friends[i], "move", {x: friends[i].pos.x + 1, y: friends[i].pos.y});
            hero.command(friends[i], "move", {x: friends[i].pos.x + 1, y: friends[i].pos.y});
        }
    }
        var enemy = hero.findNearestEnemy();
    if (enemy)
        hero.attack(enemy);
    else if (hero.health) {
        hero.move({x: hero.pos.x + 1, y: hero.pos.y});
        hero.move({x: hero.pos.x + 1, y: hero.pos.y});
    }
}
