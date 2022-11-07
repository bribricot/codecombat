function findMostDangerous(enemies) {
    var mostDangerous = null;
    var mostHealth = -Infinity;
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if(enemy.health > mostHealth) {
            mostDangerous = enemy;
            mostHealth = enemy.health;
        }
    }
    return mostDangerous;
}