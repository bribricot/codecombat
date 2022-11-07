// Pender wants to test you on a series of trials. Use your boss star to clear off the ogres! Remember, you cannot move or attack in this level.
function summonTroops(){
    // These are just an example. Feel free to use griffin riders and/or other units!
    if (hero.gold >= 40){
        hero.summon("archer"); 
        hero.summon("soldier");
    }
}

function collectCoins(friends){
    var items = hero.findNearest(hero.findItems());
    
    if (items && friends.type === "peasant"){
        hero.command(friends, "move", items.pos)
    }
}

while (true){
    summonTroops();
    var friends = hero.findFriends();
    var enemies = hero.findEnemies();
    // Iterate over all troops using a for loop. Make peasants collect coins. Combat troops fight. 
    collectCoins(friends);
    if (enemies){
        hero.command(friends, "attack", enemies)
    } else {
        hero.command(friends, "move", {x: 30, y: 36})
    }
}
