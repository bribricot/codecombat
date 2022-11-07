// Protect the cage.
// Put a soldier at each X.
var points = [];
points[0] = {x: 33, y: 42};
points[1] = {x: 47, y: 42};
points[2] = {x: 33, y: 26};
points[3] = {x: 47, y: 26};

for (var i = 0; i < 100; i++) { 
var coins = hero.findNearest(hero.findItems());
    hero.move(coins.pos);
}
// 2. Build 4 soldiers.
for(var i = 0; i < 4; i++) {
    hero.summon("soldier");
}


while (true) {
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        var enemy = friends[i].findNearestEnemy();
        if (enemy && enemy.team == "ogres" && friends[i].distanceTo(enemy) < 5) {
            hero.command(friends[i], "attack", enemy);
        }
        else {
            hero.command(friends[i], "move", points[i]);
        }    
    }
}