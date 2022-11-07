// For this level, your hero doesn't fight.
// Command your archers to focus fire on the enemy with the most health!

function findMostHealth(tab) {
    let greatest = tab[0];
	for (var i = 0; i < tab.length; i++) {
		if (tab[i].health > greatest.health)
			greatest = tab[i];
	}
	return greatest;
}

var friends = hero.findFriends();

while (true) {
    var enemies = hero.findEnemies();
    var target = findMostHealth(enemies);
    for (var i = 0; i < friends.length; i++) {
        if (target)
            hero.command(friends[i], "attack", target);
    }
}
