
/* Ça fait beaucoup de Yaks !
Le type de l'ennemi est tout brouillé.
Trouvez tous les ennemis qui ne sont pas des "sand-yak" et attaquez-les, vous devrez filtrer les Yaks...
En entrant dans une clairière remplie à ras bord de yacks... Vous remarquez que quelque chose ne va pas...
N'oubliez pas que le type de Yak est "sand-yak"! Utilisez ces informations pour éliminer ces embêtants yaks.
*/
function removeByType(enemies, excludedType) {
    let tempArray = [];
    // Go through each enemy and check to see if its type is excludedType.
    for (let i = 0; i < enemies.length; i++) {
        // If it isn't, 'push' it onto the array for the tempArray to be the one with all the enemies filtered.
        if (enemies[i].type !== excludedType) {
            tempArray.push(enemies[i]);
        }
    }
    return tempArray;
}


while(true) {
    // Find the enemies!
    let enemies = hero.findEnemies();
    // Remove those pesky Yaks.
    enemies = removeByType(enemies, "sand-yak");
    let enemy = hero.findNearest(enemies);
    
    // Now... 'remove' those enemies.
    if(enemy) {
        hero.attack(enemy);
    }
}
