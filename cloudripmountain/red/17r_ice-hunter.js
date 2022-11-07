// Hunt for 4 yaks. Choose only the small ones.
// Small yak names contain a "bos" substring.

// This function checks if a word contains a substring.
function isSubstring(word, substring) {
    // We iterate through the start indexes only.
    var rightEdge = word.length - substring.length;
    // Loop through the indexes of the word.
    for (var i = 0; i <= rightEdge; i++) {
        // For each of them loop through the substring
        for (var j = 0; j < substring.length; j++) {
            // Use an offset for the word's indexes.
            var shiftedIndex = i + j;
            // If letters aren't the same:
            if (word[shiftedIndex] != substring[j]) {
                // Check the next start index in the word.
                break;
            }
            // If it was the last letter in the substring:
            if (j == substring.length - 1) {
                // Then the substring is in the word.
                return true;
            }
        }
    }
    // We haven't found the substring in the word.
    return false;
}

// Loop through all enemies.
var enemies = hero.findEnemies();
var i = 0;
while (i < enemies.length) {
    if (isSubstring(enemies[i].id, "bos")) {
        while (enemies[i].health > 0)
            hero.attack(enemies[i].id);
    }
    i++;
}