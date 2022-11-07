var lastUnit = hero.built[hero.built.length-1];

//vs une boucle que pour un friend par exemple:


// The order of the friends array won't change over time.
var friends = hero.findFriends();
// The 0-th index is the first friend! This will be the same friend, until it dies...
var firstFriend = friends[0];
// Starting a for-loop at index 1 skips over the very first unit, which is busy making a very noble sacrifice.
for(var i = 1; i < friends.length; i++) {
    // Flee!
}