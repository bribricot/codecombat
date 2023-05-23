/* Find the password for the gates and defeat the ogres.
The gates are strong and can be opened only by the password.
Three peasants know three parts of the passage: message, separator and index. Use them and split the method to open the gates and defeat the ogres.

someString.split(separator) method receives an argument 'separator' method receives an argument 'array of the words' in someString using 'separator' as the delimiter string.

var someString = "list;some;words";
var words = someString.split(";"); // words are an array.
hero.say(words[1]); // Hero says "some".

*/

// Get the secret message.
hero.moveXY(52, 50);
var friend = hero.findNearest(hero.findFriends());
var message = friend.message;

// Get the separator symbol.
hero.moveXY(66, 34);
friend = hero.findNearest(hero.findFriends());
var separator = friend.separator;

// Get the index.
hero.moveXY(52, 18);
friend = hero.findNearest(hero.findFriends());
var index = friend.index;

// Move to the gates.
hero.moveXY(44, 34);
// Split `message` with `separator` to get an array:
message = message.split(separator);
// Get the password from the array of words by `index`:
// Say the password:
message = message[index];

hero.say(message);
// Defeat the ogres:
while (true) {
var enemy = hero.findNearestEnemy();
if (enemy)
    hero.attack(enemy);
}
