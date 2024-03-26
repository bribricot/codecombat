

while(enemy) {
        // While the enemy's health is > 0:
        while(enemy.health > 0) {
            // Attack the enemy:
            if (enemy) {
                hero.attack(enemy);
            }
        }
        // Update the variable to the next nearest enemy:
        enemy = hero.findNearestEnemy();
    }