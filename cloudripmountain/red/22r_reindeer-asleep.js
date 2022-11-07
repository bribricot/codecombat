// This array contains the status for each reindeer.
var deerStatus = [ "asleep", "asleep", "asleep", "asleep", "asleep" ];

// And this array contains our reindeer.
var friends = hero.findFriends();

// Loop through the reindeer and find the awake ones:

for (var i = 0; i < friends.length; i++) {
    var awake = null;
    // Reindeer with y position > 30 aren't in a pen.
    // If so, set the reindeer's entry to "awake".
    if (friends[i].pos.y > 30)
        deerStatus[i] = awake;
}

// Loop through statuses and report to Merek.
for (var i = 0; i < deerStatus.length; i++) {
    // Tell Merek the reindeer index and its status.
    // Say something like "Reindeer 2 is asleep".
    hero.say(friends[i] + ' ' +  i + ' is ' + deerStatus[i]);
}
//hero.say(friends[i].id + " is asleep");
