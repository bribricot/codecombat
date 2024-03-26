//Command my troops : 

function commandSoldiers() {
var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type == "soldier") {
            var enemy = friends[i].findNearestEnemy();
            if (enemy) {
                hero.command(friends[i], "attack", enemy);
            }
        }
    }
}

//Command to find a coin : 

function commandPeasant(peasant) {
    var coin = peasant.findNearestItem();
    hero.command(peasant, "move", coin.pos);
}

// Command griffin
function commandGriffin(griffin) {
    var enemy = hero.findNearest(hero.findEnemies());
    if (enemy)
        hero.command(griffin, "attack", enemy);
}