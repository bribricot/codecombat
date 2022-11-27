    var enemy = hero.findNearestEnemy();
    // if there is an enemy, then attack it:
    if (enemy)
        hero.attack(enemy);
//

var enemies = hero.findEnemies();
var i = 0;
while (i < enemies.length) {
    while (enemies[i].health > 0) {
    	hero.attack(enemies[i].id);
	}
    i++;
}