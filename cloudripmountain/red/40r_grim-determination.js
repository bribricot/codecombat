// Your goal is to protect Reynaldo
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

function commandPaladin(paladin) {
    var enemy = hero.findNearest(hero.findEnemies());
    var friends = hero.findNearest(hero.findFriends());
    var lowest = lowestHealthPaladin();
    hero.command(paladin, "shield");
    if (enemy) 
        hero.command(paladin, "attack", enemy);
    if (lowest && paladin.canCast("heal", lowest)) {
        hero.command(paladin, "cast", "heal", lowest);
    }
}
function commandPeasant(peasant) {
    var coin = peasant.findNearestItem();
    hero.command(peasant, "move", coin.pos);
}
function commandGriffin(griffin) {
    var enemy = hero.findNearest(hero.findEnemies());
    if (enemy)
        hero.command(griffin, "attack", enemy);
}
function commandFriends() {
    var friends = hero.findFriends();
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].type == "peasant")
            commandPeasant(friends[i]);
        else if (friends[i].type == "griffin-rider")
            commandGriffin(friends[i]);
        else if (friends[i].type == "paladin")
            commandPaladin(friends[i]);
    }
}
while (true) {
    var summonTypes = ["griffin-rider"];
    var type = summonTypes[hero.built.length % summonTypes.length];
    commandFriends();
    if (hero.costOf(type) <= hero.gold)
        hero.summon(type);
}