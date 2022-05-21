//Spy among us
var friends = hero.findFriends();
var i = 0;
var spy = "z";

function containsZ(string, letter) {
  for (var i = 0; i < string.length; i++) {
      if(string[i] === letter)
           return true;
	}
}
while (i < friends.length) {
    if (containsZ(friends[i].id, spy)) {
        hero.say(friends[i].id + " is a spy!!!");
    }
    i++;
}
//***

function spy(string) {
    if (friends[i].id === 'Yozrik')
        return true;
}

while (i < friends.length) {
    if (spy(friends[i].id)) {
        hero.say(friends[i].id + " is a spy!!!");
    }
    i++;
}

//Code combat example

function letterInWord(word, letter) {
    for (var i = 0; i < word.length; i++) {
        // If character is equal to letter, return true
        if(word[i] === letter)
            return true;
    }
}

var spyLetter = "z";
var friends = hero.findFriends();

for (var i = 0; i < friends.length; i++) {
    if (letterInWord(friends[i].id, spyLetter)) {
        // Reveal the spy!
        hero.say(friends[i].id + " is a spy!!!");
    } else {
        hero.say(friends[i].id + " is a friend.");
    }
}
