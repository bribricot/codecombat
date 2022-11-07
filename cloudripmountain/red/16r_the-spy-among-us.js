// The inner gate can hold for a long time.
// However, one of these peasants is an OGRE SPY!
// There is a hint! The spy's name has the letter "z"

// This function checks for a specific letter in a word.
// A string is just an array! Loop over it like an array


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
