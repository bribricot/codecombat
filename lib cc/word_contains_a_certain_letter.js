var friends = hero.findFriends();
var i = 0;
var searched = "";

function containsLetter(string, letter) {
  for (var i = 0; i < string.length; i++) {
      if(string[i] === letter)
           return true;
	}
}
while (i < friends.length) {
    if (containsLetter(friends[i].id, searched)) {
        hero.say(friends[i].id + " is my letter");
    }
    i++;
}
