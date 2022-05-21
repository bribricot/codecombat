// Protect the workers and animals!

// Defend these two positions:
var defend = [];
defend[0] = { x: 98, y: 28 };
defend[1] = { x: 84, y: 7 };

var soldiers = [];

if (hero.gold >= hero.costOf('soldier'))
    hero.summon("soldier");

var friends = hero.findFriends();
for(var i=0; i < friends.length; i++) {
    var friend = friends[i];
    if(friend.type == "soldier") {
        soldiers.push(friend);
    } else {
        // Defend the workers:
        defend.push(friend);
    }
}


var phase = 0;


while(true) {
    // Use a for-loop to assign each soldier to a corresponding defend[] target
    // Use command(soldier, "defend", thang) or command(soldier, "defend", position)
    for (var i = 0; i < defend.length; i++) {
        hero.command(soldiers[i], "defend", defend[i]);
    }
    while (phase === 0 && (hero.pos.x < 90 || hero.pos.y < 70))
        hero.move({x: 97, y: 70});

    phase++;
    if (phase === 1) {
        var items = hero.findItems();
        for (var i = 0; i < items.length; i++)
            hero.move(items[i].pos);
    }

// AU CAS OÙ ON VEUT LE FAIRE À L'ENVERS

// for (var i = items.length - 1; i >= 0; i--)
//    hero.move(items[i].pos);

    phase++;
    while (phase === 2 && hero.pos.x < 39)
        hero.move({x: 39, y: 68});

    phase++;

    var enemy = hero.findNearestEnemy();
    if (enemy)
        hero.attack(enemy);
}
