// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!
while(hero.time < 22) {
    // Collect coins
    var coins = hero.findItems();
    var nearest = hero.findNearest(coins);
    hero.move(nearest.pos);
}

while(hero.pos.x > 16) {
    // Retreat behind the fence
    hero.move({x: 16, y: 39});
}

// Build a fence to keep the ogres out.
hero.buildXY("fence", 21, 37);
