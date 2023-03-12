/*
To get to the treasures you need 4 passwords. Luckily, we caught a scout that had the passwords.
Now, we just need to decipher the message to get them.
Words in the message are split by ";" and can be surrounded by redundant whitespaces.
Also, we know that the passwords in the message only have 5 letters.

In this level you need to use various skills from recent levels.
You will want to make use the following methods:

someStr.split(separator); // To get an array of words;
word.trim(); // To remove leading and trailing whitespaces;
cleanedWord.length; // To get the word's length

*/

// Find the passwords and get the treasure.

// We intercepted a scout with an encoded message.
let encodedMessage = hero.findNearest(hero.findFriends()).message;
// Here we will store passwords.
let passwordArray = [];
// All real passwords have 5 letters.
let passwordLength = 5;

// Split encodedMessage by using a ";" and save the words in a variable.

// Iterate over all of the words.

    // Trim each word to remove whitespace.
    
    // If the length of the cleaned word is 5:
    
        // Push the cleaned word to passwordArray:
        


// Move to each mark and say the correct password:
var marksPos = [{x: 12, y: 14}, {x: 38, y: 38},
    {x: 42, y: 16}, {x: 54, y: 12}];
for (let i = 0; i < 4; i++) {
    let pos = marksPos[i];
    hero.moveXY(pos.x, pos.y);
    let password = passwordArray[i];
    if (password) {
        hero.say(password);
    } 
    else {
        hero.say("qwerty");
    }
}
