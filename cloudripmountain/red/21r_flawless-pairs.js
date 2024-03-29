// Collect 4 pairs of gems.
// Each pair must contain equal valued gems.

// This function returns two items with the same value.

function findValuePair(items){
    // Check each possible pair in the array.
    // Iterate indexes 'i' from 0 to the last one.
    for (var i = 0; i < items.length; i++) {
        // Iterate indexes 'j' from 0 to the last.
        // Line painter change position of index with us 
        for (var j = i; j < items.length; j++) {
            // If it's the same element, then skip it.
            if (i == j) {
                continue;
            }
            // If we found a pair with two equal gems, then return them.
            if (items[i].value === items[j].value) {
                return [items[i], items[j]];
            }
        }
    }
    // Return an empty array if no pair exists.
    return null;
}

while (true) {
    var gems = hero.findItems();
    var gemPair = findValuePair(gems);
    // If the gemPair exists, collect the gems!
    if (gemPair) {
        var gemA = gemPair[0];
        var gemB = gemPair[1];
        // Move to the first gem.
        hero.moveXY(gemA.pos.x, gemA.pos.y);
        // Return to get the haste from the wizard.
        hero.moveXY(40, 44);
        // Then move to the second gem.
        hero.moveXY(gemB.pos.x, gemB.pos.y);
        // Return to get the haste from the wizard.
         hero.moveXY(40, 44);       
    }
}
