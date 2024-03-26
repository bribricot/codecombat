/* 
Collect gold efficiently by commanding peasants wisely!

Peasants should collect coins and build decoys.
The function should return the best item per target
Use an array of ids to ensure no two peasants target the same item.
Command them to "buildXY" a "decoy" when an enemy is targeting a peasant:
let enemy = peasant.findNearestEnemy();
if (enemy.target == peasant) {
    ...
}
To command a peasant to build, use: 
command(peasant, "buildXY", "decoy", x, y)
For this level, build your decoys at peasant.pos.x - 2, so the decoy will lead the ogres into the arrow towers.

*/

function findBestItem(friend, excludedItems) {
    let items = friend.findItems();
    let bestItem = null;
    let bestItemValue = 0;
    for (let i = 0; i < items.length; i++) {
        /* indexOf searches and array for a certain element:
        If the array doesn't contain it, it returns -1
        In that case, skip over that item as another peasant is targeting it
        This way peasant don't compete for coins, because the excludedItems exists, after this is claimedItems, the list where the item's are removed when they're claimed by another peasant.*/
        if (excludedItems.indexOf(items[i]) >= 0) { 
        	//There is an index? So it can loop again from the beginning, this item is already taken if not.
            continue;
        }
        /*
        bestItemValue should be the highest item.value / distanceTo
        Accumulator, we save the highest value and replace it by the next one, and bestItem become the item that we push after in the claimedItems array, that is empty at the beggining of the while true loop.
        */
        if (bestItemValue < items[i].value / friend.distanceTo(items[i])) {
            bestItemValue = items[i].value / friend.distanceTo(items[i]);
            bestItem = items[i];
        }
    }
    return bestItem;
}

while (true) {
    let peasants = hero.findByType("peasant");
    // Create a new array every loop.
    let claimedItems = [];

    for (let i = 0; i < peasants.length; i++) {
        let enoughGoldForDecoy = hero.gold >= peasants[i].costOf("decoy");
        let enemy = peasants[i].findNearestEnemy();
        if (enemy && enemy.target == peasants[i] && enoughGoldForDecoy) {
            // If the peasant is the target of the enemy
            // AND the hero has enough gold for a decoy
                // Command a peasant to build a "decoy":
                // Add a continue so the peasant doesn't collect coins when building.
            hero.command(peasants[i], "buildXY", "decoy", peasants[i].pos.x - 2, peasants[i].pos.y);
            continue;
        }
        let item = findBestItem(peasants[i], claimedItems);
        if (item) {
            // After an item is claimed, stick it in the claimedItems array.
            claimedItems.push(item);
            // Command the peasant to collect the coin:
            hero.command(peasants[i], 'move', item.pos);
        }
    }
}
