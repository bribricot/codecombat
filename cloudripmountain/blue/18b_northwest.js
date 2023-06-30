/*
Always listen to the guide in the Mountains.
Your pet should find and then bring the potion to the hero.
Enable your pet hear the nearby peasants giving directions back to the hero.
Check if the string spoken by the peasant matches any of the known words ("north", "west", or "fetch")

Substring searching has two important points.

First, how we limit the indexes in the TEXT where we search for a WORD.

Second, how we use a shifted index for letter comparison.
We limit the index we search in the TEXT  because we are looking for a WORD  "inside" of the TEXT.

For example: 
text = "go'wester" and word = "north"

go'wester|
north    |  <- textIndex = 0
 north   |  <- textIndex = 1 and shiftedIndex = 1 + wordIndex
  north  |
   north |
    north|  <- textIndex = text.length - word.length
     nort|h <- That's why we limit the index

For each index in TEXT we loop through characters in WORD. We "move" (shift) WORD by one letter for each full comparison step.
Then we compare WORD and TEXT character by character.

go'wester   <- the `text` we will search inside of for `word`
  north     <- the `word` to search for; the outer loop textIndex starting at 2
  01234     <- wordIndex value; we will search each character in `word` from 0 to 4
  23456     <- shiftedIndex value; we search in `text` from 2 to 6 (wordIndex + textIndex)

*/

// This function checks if the word is in the text.
function wordInText(text, word) {
    // Iterate through each character in the text.
    for (let i = 0; i <= text.length - word.length; i++) {
        // For each of them loop through each character in word.
        for (let j = 0; j < word.length; j++) {
            // Store the shifted index i + j.
            let shiftedIndex = i + j;
            // If a character within the shifted index.
            // isn't equal to the character in word at the index "j"
            if (text[shiftedIndex] != word[j])
                // Break the loop.
                break;
            // If j is equal to the index of the last letter in word
            if (j == word.length - 1)
                // Then the entire word is in the text.
                // Return true.
                return true;
        }
    }
    // The word was not found in text. Return false.
    return false;
}

// Follow the guides directions where to run.
function onHear(event) {
    // If "west" is in the phrase, the pet should run left.
    if (wordInText(event.message, "west")) {
        pet.moveXY(pet.pos.x - 28, pet.pos.y);
    }
    // If "north" is in the phrase, the pet should run up.
    else if (wordInText(event.message, "north")) {
        pet.moveXY(pet.pos.x, pet.pos.y + 24);
    } 
    // Else the pet should try to fetch the potion.
    else {
        let potion = pet.findNearestByType("potion");
        if (potion) {
            pet.fetch(potion);
        }
    }
}

pet.on("hear", onHear);
//
