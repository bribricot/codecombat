// Collect gold efficiently by commanding peasants wisely!
// Peasants should collect coins and build decoys.

// The function should return the best item per target
// Use an array of ids to ensure no two peasants target the same item.
function findBestItem(friend, excludedItems) {
    var items = friend.findItems();
    var bestItem = null;
    var bestItemValue = 0;
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        // indexOf searches and array for a certain element:
        var idx = excludedItems.indexOf(item);
        // If the array doesn't contain it, it returns -1
        // In that case, skip over that item as another peasant is targeting it.
        if(idx != -1) { continue; }
        // Finish the function!
        // Remember bestItemValue should be the highest item.value / distanceTo
        
    }
    return bestItem;
}

// This function checks if you have enough gold for a decoy.
function enoughGoldForDecoy() {
    return hero.gold >= 25;
}

while(true) {
    var peasants = hero.findByType("peasant");
    // Create a new array every loop.
    var claimedItems = [];
    for(var i = 0; i < peasants.length; i++) {
        var peasant = peasants[i];
        var enemy = peasant.findNearestEnemy();
        if(enemy) {
            // If the peasant is the target of the enemy
            // AND the hero has enough gold for a decoy
            
                // Command a peasant to build a "decoy":
                
                // Add a continue so the peasant doesn't collect coins when building.
        }
        var item = findBestItem(peasant, claimedItems);
        if(item) {
            // After an item is claimed, stick it in the claimedItems array.
            claimedItems.push(item);
            // Command the peasant to collect the coin:
            
        }
    }
}