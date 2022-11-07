// Collect 80 gold
while (hero.gold < 80) {
var coins = hero.findNearest(hero.findItems());
    hero.move(coins.pos);
    i++;
}

while (true) {
    // Build 4 soldiers to use as bait
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
    // Send your soldiers into position
    var points = [];
    points[0] = { x: 13, y: 73 };
    points[1] = { x: 51, y: 73 };
    points[2] = { x: 51, y: 53 };
    points[3] = { x: 90, y: 52 };
    
    var friends = hero.findFriends();
    // Use a for-loop to loop over i from 0 to 4
    for (var i = 0; i < friends.length; i++) {
        hero.command(friends[i], "move", points[i]);
    }
    // Match the friends to the points and command them to move
}   
