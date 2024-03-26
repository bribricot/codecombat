hero.distanceTo(target);
/*
>Returns the distance in meters to the target unit from the center of the hero.
###Required Parameters###
target:object (ex:hero.findNearestEnemy())
The target unit whose distance you want to measure.
*/

function findDistanceTo(unit) {
    let distance = hero.distanceTo(unit);
    return distance
}
while (true) {
    let friend = hero.findNearest(hero.findFriends());
    let enemy = hero.findNearestEnemy();
    let distanceToFriend = findDistanceTo(friend);
    let distanceToEnemy = findDistanceTo(enemy);
}
