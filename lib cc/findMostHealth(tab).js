function findMostHealth(tab) {
    let greatest = tab[0];
	for (let i = 0; i < tab.length; i++) {
		if (tab[i].health > greatest.health)
			greatest = tab[i];
	}
	return greatest;
}

let friends = hero.findFriends();

while (true) {
    let enemies = hero.findEnemies();
    let target = findMostHealth(enemies);
    for (let i = 0; i < friends.length; i++) {
        if (target)
            hero.command(friends[i], "attack", target);
    }
}