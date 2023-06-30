/* 
Destroy 5 robobombs. Some of them are old and safe.
Destroy the old robobombs that contain a specific letter.
Old (safe) bombs have the certain letter in their id.
The friendly engineer nearby will provide you the letter!
You have learned how to iterate over strings and get all letters from previous levels.
If you have trouble with this level, replay previous levels to refresh what you know!
for (let i = 0; i < word.length; i++) {
    let character = word[i];
    ...
}

*/
// This function checks if searchLetter is in searchWord.

function isLetterInWord(word, letter) {
    // Complete the function.
    for (let i = 0; i < word.length; i++) {
    	if (word[i] == letter) {
    		return true;
    	}
    }
    return false;
}

// The engineer knows how the old robots are marked.
let engineer = hero.findFriends()[0];
let safeLetter = engineer.safeLetter;

let enemies = hero.findEnemies();
for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (isLetterInWord(enemy.id, safeLetter)) {
        // Destroy the enemy if it's safe.
        while (enemy.health > 0) {
            hero.attack(enemy);
        }
    }
}
