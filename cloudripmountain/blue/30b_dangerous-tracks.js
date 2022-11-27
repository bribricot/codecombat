/* Hints :
Command Paladins to "shield" when a fireball gets too close.
Advance through the forgotten tomb.
Be wary, traps lay in wait to ruin your day...(top middle and bottom trap)
All 10 humans must survive...

*Paladins can be commanded to shield : 
hero.findEnemyMissiles() finds all damaging missiles that they can see.
Missiles will explode when they collide with a unit!
Shielding mitigates a certain % if incoming damage
Be sure to be shielding when the fireball gets too close, or they will take full damage!
*/


// The Paladins volunteer to lead the way.
// Command them to shield against incoming enemyMissiles.
while(true) {
    let friends = hero.findFriends();
    // findEnemyMissiles finds all dangerous enemyMissiles.
    let enemyMissiles = hero.findEnemyMissiles();
    let nearestMissiles = hero.findNearest(enemyMissiles);

    for (let i = 0; i < friends.length; i++) {
        let distance = hero.distanceTo(friends[i]);
        if (friends[i].type == "paladin") {
            // Find the projectile nearest to the friends[i]:
            // If the projectile exists
            // AND is closer than 10 meters to the paladin:
            if (enemyMissiles && distance < 10)
                // Command the friends[i] to "shield":
                hero.command(friends[i], "shield", nearestMissiles);
            else
            // ELSE, when there is no potential danger, advance the paladin:
                hero.command(friends[i], "move", {x: friends[i].pos.x +1, y: friends[i].pos.y +1});
        }
            else
        // Sortie de boucle paladin : if not a paladin, just advance:
                hero.command(friends[i], "move", {x: friends[i].pos.x +1, y: friends[i].pos.y +1});
    }
    // Advance the hero in the x direction:
    hero.move({x: +1, y: +0})
}
