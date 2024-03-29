// Collect 10 mushrooms.

// This function checks if the phrase starts with the word.
function startsWith(phrase, word) {
    if (word.length > phrase.length) {
        return false;
    }
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== phrase[i])
            return false;
        }
    return true;
}


function onHear(event) {
    // Accept only options from experts.
    if (startsWith(event.speaker.id, "Exp")) {
        var potion = pet.findNearestByType("potion");
        if (potion) {
            pet.fetch(potion);
            pet.moveXY(28, 34);
        }
    }
}
pet.on("hear", onHear);
while(true) {
    var mushrooms = hero.findByType("mushroom");
    var nearest = hero.findNearest(mushrooms);
    if (nearest) {
        hero.moveXY(nearest.pos.x, nearest.pos.y);
    }
}
