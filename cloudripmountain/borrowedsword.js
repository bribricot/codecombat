

//HINTS : Good tactics can turn defeat into victory. In this level, ogres are fighting yeti. If you do nothing, or if you simply target the closest enemy, one side will win and have enough left to defeat your archers. Instead, use a for-loop to find the enemy with the highest health, then command your archer to attack that enemy. Do not continue attacking the toughest enemy until it has been defeated! You want your archers to constantly switch targets to whichever enemy has the highest health at any given moment! This way, whoever wins (between the yeti and ogres) will be weak enough for your archers to finish off. 

var archerTarget = null;

function findHealthiestTarget() {
    var mostHealth = 0;
    var bestTarget = null;
    var enemies = hero.findEnemies();
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].maxHealth > mostHealth) {
            bestTarget = enemies[i];
            mostHealth = enemies[i].maxHealth;
        }
    }
    if (bestTarget && bestTarget.health > 675) {
        return bestTarget;
    }
}

while (true) {
    if (archerTarget) 
        hero.command(archer, "attack", archerTarget);
    if (!archerTarget || archerTarget.health > 500)
        archerTarget = findHealthiestTarget();
}
