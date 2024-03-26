/* Follow one of the peasants and escape from the yeti.
There are three ways, but only one is safe. You should follow the right guide.
You can easily recognize him by his name -- it starts with "Mac".

There are three ways, but only one is safe. You should follow the right guide.
You can easily recognize him by his name -- it starts with startsWith. 

This function checks if a "phrase" starts with a "word" Compare letter by letter from the word and from the phrase with the same indexes.
If any of pairs don't coincide, then return false. If all letters in pairs are equal pairwise, then return true.

*/
function startsWith(phrase, word) {
    if (word.length > phrase.length) {
        return false;
    }
    // Iterate indexes from 0 to the length of the word.
    for (let i = 0; i < word.length; i++) {
        // Check the letter of phrase and word at index i, if they are not equal, then return false.
        if (word[i] !== phrase[i])
            return false;
        }
    // All letters in the word checked, then return true.
    return true;
}

// Follow the local guide whose name starts with "Mac".
let guides = hero.findFriends();
for (let i = 0; i < guides.length; i++) {
    if (startsWith(guides[i].id, "Mac")) {
        while(true) {
            hero.move(guides[i].pos);
        }
    }
}
