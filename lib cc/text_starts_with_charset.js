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

let guides = hero.findFriends();
for (let i = 0; i < guides.length; i++) {
    if (startsWith(guides[i].id, "mychar")) {
        while(true) {
            //Do whatever
        }
    }
}