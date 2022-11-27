//Merek l'éleveur de rennes aveugle veut loger les rennes pour la nuit, mais il ne sait pas quels enclos contiennent déjà des rennes endormis !
//Utilise un tableau pour savoir quels enclos contiennent des rennes et lesquels sont libres, puis dites à Merek quels emplacements sont ouverts. Il dira au cerf où aller, puis tout le monde pourra se reposer.


// Positions
let campPositions = [ {"x":20,"y":24}, {"x":28,"y":24}, {"x":36,"y":24}, {"x":44,"y":24}, {"x":52,"y":24} ];

// This array is used to track which reindeer is in it.
let campOccupants = [ "empty", "empty", "empty", "empty", "empty" ];

// And this array contains our reindeer.
let friends = hero.findFriends();

// Figure out which reindeer are already in their camps.
for (let i = 0; i < friends.length; i++) {
    // Check each camp if it matches a reindeer's pos.
    for (let j = 0; j < campPositions.length; j++) {
        if (campPositions[j].x == friends[i].pos.x && campPositions[j].y == friends[i].pos.y) {
            // Put the id in campOccupants at i.
            campOccupants[j] = friends[i].id;
            // break out of the inner loop here.
            break;
        }
    }
}

// Tell Merek what's in each camp.
for (let k = 0; k < campOccupants.length; k++) {
    // Tell Merek the camp index and the occupant.
    // Say something like "camp 3 is Dasher"
    hero.say("Camp " + k + " is " + campOccupants[k]);
}

