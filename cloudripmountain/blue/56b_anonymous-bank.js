/*
Pour accéder aux trésors, vous avez besoin de 4 mots de passe. Heureusement, nous avons attrapé un éclaireur qui avait les mots de passe. Nous avons  besoin de déchiffrer le message pour les obtenir. Les mots du message sont séparés par ";" et peuvent être entourés de whitespaces redondants. Les mots de passe dans le message n'ont que 5 lettres.

Methodes importantes : 

someStr.split(separator); // Pour obtenir un tableau de mot
word.trim(); // Enlever les whitespaces redondants
cleanedWord.length; // Obtenir sa length

*/

// Find the passwords and get the treasure.

// We intercepted a scout with an encoded message.
let encodedMessage = hero.findNearest(hero.findFriends()).message;
// Here we will store passwords.
let passwordArray = [];
// All real passwords have 5 letters.
let passwordLength = 5;
// Split encodedMessage by using a ";" and save the words in a variable.
let words = encodedMessage.split(";");
// Iterate over all of the words.
for (let i = 0; i < words.length; i++) {
    // Trim each word to remove whitespace.
    let wordsTrimmed = words[i].trim();
    // If the length of the cleaned word is 5:
    if (wordsTrimmed.length === 5)
        // Push the cleaned word to passwordArray:
        passwordArray.push(wordsTrimmed);
}

// Move to each mark and say the correct password:
let marksPos = [{x: 12, y: 14}, {x: 38, y: 38},
    {x: 42, y: 16}, {x: 54, y: 12}];
for (let j = 0; j < 4; j++) {
    let pos = marksPos[j];
    hero.moveXY(pos.x, pos.y);
    let password = passwordArray[j];
    if (password) {
        hero.say(password);
    } 
    else {
        hero.say("qwerty");
    }
}
