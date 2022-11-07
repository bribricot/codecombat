// Summon some soldiers, then direct them to your base.

// Each soldier costs 20 gold.
while (hero.gold > hero.costOf("soldier")) {
    hero.summon("soldier");
}
var soldiers = hero.findFriends();
var i = 0;
// Add a while loop to command all the soldiers.
while (i < soldiers.length) {
    hero.command(soldiers[i], "move", {x: 50, y: 40});
//emit / payload
    i++;
}

// Go join your comrades!
while (hero.pos.x < 50) {
    hero.move({x: 50, y: 40});
}
