// Defeat all incoming ogres.

while(true) {
    // Find the nearest enemy.
    let enemy = hero.findNearestEnemy();
    let brawler = hero.findNearest(hero.findByType('brawler'));
    // If there is an enemy, and it is a "brawler":
    if (enemy && brawler) {
        // Then say its name (.id) in UPPERCASE.
        enemy = enemy.id;
        enemy = enemy.toUpperCase();
        hero.say(enemy)
    } 
    else if (enemy)
        hero.attack(enemy);
}
