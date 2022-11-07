// This function checks if the text starts with the word.
function startsWith(text, word) {
    // If the word is longer then the text:
    if(word.length > text.length) {
        return false;
    }
    // Loop through the indexes of word and text.
    for (var index = 0; index < word.length; index++) {
        // If characters with the same index are different:
        if (word[index] != text[index]) {
            // Then the word doesn't coincide with the text.
            return false;
        }
    }
    // We checked all letters and they are the same.
    return true;
}