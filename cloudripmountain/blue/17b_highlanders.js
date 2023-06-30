/*
You must defeat the ogres
But they are using black magic!
Only the highlander soldiers are immune.
Find highlanders, their names always contain "mac"

In this level you need to only send forward soldiers with "mac" in their name. Searching through strings is tough work, but consider each part step-by-step! Programmtically, if you will:
*/

let haystack = "Hello, world!";
let needle = "o, w";
let needleIndex = 0;
for (let i = 0; i < haystack.length; i++) {
    let letter = haystack[i];
    // Check the letter matches the letter at the current needleIndex
    if (letter === needle[needleIndex]) {
        // Increment the index by one so in the next iteration of the for-loop
        // This checks if the substring is still valid on a letter-by-letter basis.
        needleIndex += 1;
        // Check if the needle index is greater than needle length
        if (needleIndex >= needle.length) {
            // Since we've gone through each index of our needle string, we know it exists!
            hero.say("Yep! " + needle + " is in " + haystack + "!");
            break;
        }
    } else {
        // Reset the index because the potential sub-string no longer matches
        needleIndex = 0;
    }
}

// */

//Real one:

//Real one:

let highlanderName = "mac";

// This function should search for a string inside of a word:
function wordInString(string, word) {
    let lengthString = string.length;
    let lengthWord = word.length;
    let subString = lengthString - lengthWord;
    // Step through indexes (i) from 0 to (lengthString - lengthWord)
    for (let i = 0; i < subString; i++) {
        // For each of them step through indexes (j) of the word length
        for (let j = 0; j < lengthWord; j++) {
            // If [i + j]th letter of the string is not equal [j]th letter of word, then break loop
            if (string[i + j] != word[j])
                break;
            // if this is the last letter of the word (j == lengthWord - 1), then return true.
            if (j == lengthWord - 1)
                return true;
        }
    // If loops are ended then the word is not inside the string. Return False.
    }
    return false;
}

// Look at your soldiers and choose highlanders only
let soldiers = hero.findFriends();
for (let i = 0; i < soldiers.length; i++) {
    let soldier = soldiers[i];
    if (wordInString(soldier.id, highlanderName)) {
        hero.say(soldier.id + " be ready.");
    }
}

// 
hero.say("ATTACK!!!");
