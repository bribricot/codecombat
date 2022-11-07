// Ogre Witches have some unpleasant surprises ready for you.

// Define a chooseTarget function which takes a friend argument
// Returns the target to attack, depending on the type of friend.
// Soldiers should attack the witches, archers should attack nearest enemy.

function chooseTarget(friend) {
    if (friend.type === 'soldier')
        return friend.findNearest(hero.findByType("witch"));
    else
        return friend.findNearest(hero.findEnemies());
}

while(true) {
    var friends = hero.findFriends();
    for(var i = 0; i < friends.length; i++) {
        // Use your chooseTarget function to decide what to attack.
        var target = chooseTarget(friends[i]);
        if (target)
            hero.command(friends[i], "attack", target);
    }
}
