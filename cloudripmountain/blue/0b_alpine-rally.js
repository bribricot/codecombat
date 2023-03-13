// Escape off the right side of the map.
// To outrun the  yeti, you'll have to make yourself faster.
// Use resetCooldown to use a spell or skill more frequently.
// manaBlast can help clear the path.

while (true) {

let yeti = hero.findNearest(hero.findByType('yeti'));
let scout = hero.findNearest(hero.findByType('scout'));

// Fast escape with cooldoown resets for the final run.
    if (hero.canCast("shrink", hero))
        hero.cast("shrink", hero);
    else if (hero.canCast("haste", hero))
        hero.cast("haste", hero);
    else if (hero.isReady("reset-cooldown"))
        hero.resetCooldown("haste");

//Knock them out of my way
    if (yeti)
        hero.manaBlast();
// For the middle part, shockwave() for speed again until the finish line and blast the scout line.
    if (scout)
        if (hero.canCast("shockwave", scout))
            hero.cast("shockwave", scout);
        
//Always moving.
    hero.move({x: hero.pos.x + 45, y:hero.pos.y});
}
