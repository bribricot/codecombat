function lowestHealthPaladin() {
    var lowestHealth = 99999;
    var lowestFriend = null;
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type != "paladin") {
            continue;
        }
        if (friends[i].health < lowestHealth && friends[i].health < friends[i].maxHealth) {
            lowestHealth = friends[i].health;
            lowestFriend = friends[i];
        }
    }
    return lowestFriend;
}