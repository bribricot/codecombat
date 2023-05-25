/* Vous devez trouver le trésor. Un seul coffre, une seule chance. Le nom de Thoktar détient la clé.
Trouvez le bon coffre en détectant une anomalie dans le nom de Thoktar !
La bon coffre est le même index que "z".
Choisissez mal et les squelettes réclameront leur propre prix!
Trouvez le coffre qui contient le trésor !
Quel que soit l'index dans le nom de Thoktar c'est l'index : "z". C'est à dire l'index des coffres que le joueur doit approcher.
Itérez sur chaque élément avec ce qui suit:
let string = "Hello, World!";
for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    hero.say(letter); 
    // The hero will say each letter individually.
}
*/

// This function should return the index of a letter:
function letterIndex(word, letter) {
   // Parcourez chaque lettre comme index du mot.
    for (let i = 0; i < word.length; i++) {
        // Store a character from the word with the current index.
        // If it is the required letter:
        if (word[i] === letter)
            // Then return the current index (number).
            return i; // or without the loop just the function word.indexOf(letter);
    }
    // If nothing, return a default value
    return -1;
}

let ogreLetter = "z";
let shaman = hero.findByType("thoktar")[0];

// Find the index and use it for finding the treasure.
let chestIndex = letterIndex(shaman.id, ogreLetter);
hero.moveXY(16 + chestIndex * 8, 36);