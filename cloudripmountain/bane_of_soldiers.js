// Robobombs explode when they are destroyed or touch an enemy.
// Split up your soldiers so that they don't all get exploded together.

while(true) {
    var enemies = hero.findEnemies();
    var enemy = hero.findNearest(enemies);
    var friends = hero.findFriends();
    var firstFriend = friends[0];
    // Send the first soldier of the friends array towards the enemy
    if (firstFriend)
        hero.command(firstFriend, "move", enemy.pos);
    for(var i = 1; i < friends.length; i++) {
        hero.command(friends[i], "move", {x: 12, y: 15});
    }
}
